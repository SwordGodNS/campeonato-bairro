import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    navigate("/admin");
  }

  return (
    <main className="login-page">
      <form onSubmit={login} className="login-box">
        <h1>Entrar no Painel</h1>
        <input placeholder="E-mail" type="email" />
        <input placeholder="Senha" type="password" />
        <button>Entrar</button>
      </form>
    </main>
  );
}
