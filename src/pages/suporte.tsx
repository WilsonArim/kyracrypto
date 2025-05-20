import React, { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

const initialState = {
  email: '',
  tipo: 'Geral',
  wallet: '',
  descricao: '',
  anexos: [] as File[],
};

export default function Suporte() {
  const [form, setForm] = useState(initialState);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setForm((prev) => ({ ...prev, anexos: files ? Array.from(files) : [] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMensagem('');

    const toBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

    let anexoPayload = {};
    if (form.anexos.length > 0) {
      try {
        const file = form.anexos[0];
        const base64String = await toBase64(file) as string;
        anexoPayload = {
          nomeAnexo: file.name,
          conteudoAnexo: base64String,
        };
      } catch (error) {
        console.error("Erro ao converter anexo para base64:", error);
        setMensagem('Erro ao processar anexo.');
        setEnviando(false);
        return;
      }
    }

    const payload = {
      email: form.email,
      assunto: form.tipo,
      wallet: form.wallet,
      descricao: form.descricao,
      ...anexoPayload,
    };

    try {
      const res = await fetch('/api/suporte', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      const resJson = await res.json();
      if (res.ok) {
        setMensagem('Solicitação enviada com sucesso!');
        setForm(initialState);
      } else {
        setMensagem(resJson.message || 'Erro ao enviar.');
      }
    } catch (err) {
      setMensagem('Erro de rede ou ao contactar o servidor. Verifica a consola.');
      console.error(err);
    }
    setEnviando(false);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-white mb-6">Suporte</h1>
        <div className="flex items-center justify-center w-full max-w-6xl min-h-[600px]">
          <div className="flex-shrink-0 flex items-center justify-center h-full mr-8">
            <Image src="/images/icons/suporte.png" alt="Suporte" width={600} height={600} />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <form onSubmit={handleSubmit} className="suporte-glow bg-transparent rounded-lg shadow-lg p-8 w-full max-w-xl flex flex-col gap-4">
              <div className="bg-blue-100 border-l-4 border-blue-600 text-blue-700 p-4 mb-2 rounded">
                Procure incluir o máximo de detalhes para agilizar o atendimento.
              </div>
              <label className="font-semibold text-blue-700">Seu e-mail
                <input type="email" name="email" required value={form.email} onChange={handleChange} className="w-full mt-1 p-2 rounded border text-blue-700 placeholder-blue-400" />
              </label>
              <label className="font-semibold text-blue-700">Como podemos ajudar?
                <select name="tipo" value={form.tipo} onChange={handleChange} className="w-full mt-1 p-2 rounded border text-blue-700">
                  <option>Geral</option>
                  <option>Dúvida</option>
                  <option>Problema Técnico</option>
                  <option>Parceria</option>
                  <option>Outro</option>
                </select>
              </label>
              <label className="font-semibold text-blue-700">Endereço da sua wallet (opcional)
                <input type="text" name="wallet" value={form.wallet} onChange={handleChange} className="w-full mt-1 p-2 rounded border text-blue-700 placeholder-blue-400" />
              </label>
              <label className="font-semibold text-blue-700">Descrição
                <textarea name="descricao" required value={form.descricao} onChange={handleChange} className="w-full mt-1 p-2 rounded border min-h-[100px] text-blue-700 placeholder-blue-400" />
              </label>
              <label className="font-semibold text-blue-700">Anexos (opcional)
                <input type="file" name="anexos" onChange={handleFileChange} className="w-full mt-1 text-blue-700" />
              </label>
              <button type="submit" disabled={enviando} className="bg-blue-600 text-white px-4 py-2 rounded font-bold mt-2 hover:bg-blue-700 disabled:opacity-60">
                {enviando ? 'Enviando...' : 'Enviar'}
              </button>
              {mensagem && (
                <div className={`p-4 mt-2 rounded ${mensagem.startsWith('Solicitação enviada') ? 'bg-green-100 border-l-4 border-green-600 text-green-700' : 'bg-red-100 border-l-4 border-red-600 text-red-700'}`}>
                  {mensagem}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .suporte-glow {
          background: transparent;
          border: 2px solid #3ecbff;
          border-radius: 18px;
          box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
          margin: 0 0 18px 0;
        }
      `}</style>
    </Layout>
  );
} 