import { useNavigate } from "react-router-dom";
import { Trophy, Lock, Mail, ShieldCheck, Sparkles } from "lucide-react";

export default function LoginPage() {
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    navigate("/admin");
  }

  return (
    <main className="login-page premium-login">
      <div className="login-bg"></div>

      <div className="login-particles">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      <form onSubmit={login} className="login-box premium-login-box">
        <div className="login-icon">
          <Trophy size={54} />
        </div>

        <span className="login-badge">
          <Sparkles size={16} />
          Copa do Bairro 2026
        </span>

        <h1>Entrar no Painel</h1>
        <p>Controle times, jogos, classificação, artilharia e muito mais.</p>

        <label className="login-input">
          <Mail size={20} />
          <input placeholder="E-mail" type="email" />
        </label>

        <label className="login-input">
          <Lock size={20} />
          <input placeholder="Senha" type="password" />
        </label>

        <button className="login-submit">
          <ShieldCheck size={20} />
          Entrar no Painel
        </button>
      </form>
    </main>
  );
}