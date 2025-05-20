import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Admin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [usuario, setUsuario] = useState<any>(null);

  // Login com e-mail e senha
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErro('');
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });
    if (error) {
      setErro(error.message);
    } else {
      setUsuario(data.user);
    }
  }

  // Logout
  async function handleLogout() {
    await supabase.auth.signOut();
    setUsuario(null);
  }

  if (!usuario) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#18162A]">
        <form onSubmit={handleLogin} className="bg-[#232136] p-8 rounded-xl shadow-lg flex flex-col gap-4 w-80">
          <h2 className="text-white text-xl font-bold mb-2">Login Administrador</h2>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="px-4 py-2 rounded bg-[#18162A] text-white border border-[#333] focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            className="px-4 py-2 rounded bg-[#18162A] text-white border border-[#333] focus:outline-none"
            required
          />
          {erro && <span className="text-red-400 text-sm">{erro}</span>}
          <button type="submit" className="px-4 py-2 rounded bg-[#00BFFF] text-white font-bold">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="admin-glow max-w-2xl w-full mx-auto p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-2xl font-bold">Painel do Administrador</h2>
            <button onClick={handleLogout} className="px-4 py-2 rounded bg-red-500 text-white font-bold">Sair</button>
          </div>
          <CadastroArtigo />
        </div>
      </div>
      <style jsx>{`
        .admin-glow {
          background: transparent;
          border: 2px solid #3ecbff;
          border-radius: 18px;
          box-shadow: 0 0 16px 2px #3ecbff, 0 0 40px 4px #1a2b3c inset;
          margin: 0 0 18px 0;
        }
      `}</style>
    </>
  );
}

function CadastroArtigo() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [url, setUrl] = useState('');
  const [imagem, setImagem] = useState('');
  const [tipo, setTipo] = useState('artigo');
  const [mensagem, setMensagem] = useState('');
  const [erro, setErro] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMensagem('');
    setErro('');
    const { error } = await supabase.from('artigos').insert([
      { titulo, descricao, url, imagem, tipo }
    ]);
    if (error) {
      setErro(error.message);
    } else {
      setMensagem('Artigo cadastrado com sucesso!');
      setTitulo('');
      setDescricao('');
      setUrl('');
      setImagem('');
      setTipo('artigo');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#232136] p-6 rounded-xl shadow-lg flex flex-col gap-4 mb-8">
      <input type="text" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)}
        className="px-4 py-2 rounded bg-[#18162A] text-white border border-[#333] focus:outline-none" required />
      <textarea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)}
        className="px-4 py-2 rounded bg-[#18162A] text-white border border-[#333] focus:outline-none" required />
      <input type="text" placeholder="URL do artigo ou vídeo" value={url} onChange={e => setUrl(e.target.value)}
        className="px-4 py-2 rounded bg-[#18162A] text-white border border-[#333] focus:outline-none" required />
      <input type="text" placeholder="URL da imagem" value={imagem} onChange={e => setImagem(e.target.value)}
        className="px-4 py-2 rounded bg-[#18162A] text-white border border-[#333] focus:outline-none" required />
      <select value={tipo} onChange={e => setTipo(e.target.value)}
        className="px-4 py-2 rounded bg-[#18162A] text-white border border-[#333] focus:outline-none">
        <option value="artigo">Artigo</option>
        <option value="video">Vídeo</option>
      </select>
      <button type="submit" className="px-4 py-2 rounded bg-[#00BFFF] text-white font-bold">Cadastrar</button>
      {mensagem && <span className="text-green-400 text-sm">{mensagem}</span>}
      {erro && <span className="text-red-400 text-sm">{erro}</span>}
    </form>
  );
}