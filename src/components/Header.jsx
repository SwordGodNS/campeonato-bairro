import { Link } from "react-router-dom";
import { Trophy } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand"><Trophy /> Copa do Bairro</Link>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/confronto">Confronto</Link>
        <Link to="/times">Times</Link>
        <Link to="/classificacao">Classificação</Link>
        <Link to="/artilharia">Artilharia</Link>
        <Link to="/login" className="login-btn">Painel</Link>
      </nav>
    </header>
  );
}
