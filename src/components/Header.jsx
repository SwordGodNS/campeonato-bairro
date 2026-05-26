import { Link, NavLink } from "react-router-dom";
import { Trophy } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <Trophy size={22} />
        <span>Copa do Bairro</span>
      </Link>

      <nav className="header-nav">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/confronto">Confronto</NavLink>
        <NavLink to="/times">Times</NavLink>
        <NavLink to="/classificacao">Classificação</NavLink>
        <NavLink to="/artilharia">Artilharia</NavLink>
        <NavLink to="/login" className="login-btn">Painel</NavLink>
      </nav>
    </header>
  );
}
