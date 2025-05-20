import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, assunto, wallet, descricao, nomeAnexo, conteudoAnexo } = req.body;

    // Validação básica (pode expandir conforme necessário)
    if (!email || !assunto || !descricao) {
      return res.status(400).json({ message: 'Campos obrigatórios em falta.' });
    }

    // Configurar o transporter do Nodemailer
    // Usar as variáveis de ambiente específicas para o formulário de suporte
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // smtp.zoho.com para contas gratuitas
      port: parseInt(process.env.SMTP_PORT || '587'), // Usar 587 como padrão se não definida
      secure: parseInt(process.env.SMTP_PORT || '587') === 465, // true para 465, false para outras (como 587 com STARTTLS)
      auth: {
        user: process.env.SMTP_USER,       // seu kyracrypto@kyrakrypto.xyz
        pass: process.env.SMTP_PASS,       // sua App Password MAIS RECENTE
      },
      // Adicionar opções de debug para ver mais logs do Nodemailer
      // logger: true,
      // debug: true,
    });

    const mailOptions: nodemailer.SendMailOptions = {
      from: `"${email}" <${process.env.SMTP_USER}>`, // Remetente é a conta do Zoho, mas o "nome" pode ser o email do utilizador
      replyTo: email, // Para que as respostas vão para o email do utilizador
      to: process.env.SUPORTE_DESTINO, // O seu email de suporte
      subject: `Novo Pedido de Suporte: ${assunto} (de ${email})`,
      text: `Email do Utilizador: ${email}\nWallet Opcional: ${wallet || 'Não fornecida'}\n\nDescrição:\n${descricao}`,
      html: `<p><strong>Email do Utilizador:</strong> ${email}</p>
             <p><strong>Wallet Opcional:</strong> ${wallet || 'Não fornecida'}</p>
             <hr>
             <p><strong>Descrição:</strong></p>
             <p>${descricao.replace(/\n/g, '<br>')}</p>`,
    };

    // Se houver anexos (simplificado para um anexo por enquanto)
    if (nomeAnexo && conteudoAnexo) {
      mailOptions.attachments = [
        {
          filename: nomeAnexo,
          content: conteudoAnexo.split(';base64,').pop(), // Extrair apenas os dados base64
          encoding: 'base64',
        },
      ];
    }

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email de suporte enviado com sucesso!');
      return res.status(200).json({ message: 'Pedido de suporte enviado com sucesso!' });
    } catch (error: any) {
      console.error('Erro ao enviar email de suporte:', error);
      // Retornar mais detalhes do erro para o frontend, se possível e seguro
      let errorMessage = 'Falha ao enviar pedido de suporte.';
      if (error.responseCode) {
        errorMessage += ` Código: ${error.responseCode}.`;
      }
      if (error.command) {
        errorMessage += ` Comando: ${error.command}.`;
      }
      // Não exponha a stack completa no erro da API por segurança
      return res.status(500).json({ message: errorMessage, details: error.message }); 
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
} 