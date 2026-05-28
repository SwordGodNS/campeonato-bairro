import { Link, NavLink } from "react-router-dom";
import {
  Trophy,
  Shield,
  Swords,
  Users,
  Medal,
  Target,
  LayoutDashboard,
  Handshake,
} from "lucide-react";

export default function Header() {
  const links = [
    { to: "/", label: "Início", icon: Shield },
    { to: "/confronto", label: "Confronto", icon: Swords },
    { to: "/times", label: "Times", icon: Users },
    { to: "/classificacao", label: "Classificação", icon: Medal },
    { to: "/artilharia", label: "Artilharia", icon: Target },
    { to: "/patrocinadores", label: "Patrocínios", icon: Handshake },
    { to: "/login", label: "Painel", icon: LayoutDashboard, painel: true },
  ];

  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="brand-icon">
          <Trophy size={22} />
        </span>
        <span>Copa do Bairro</span>
      </Link>

      <nav className="header-nav">
        {links.map(({ to, label, icon: Icon, painel }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={painel ? "login-btn" : ""}
          >
            <Icon size={15} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}