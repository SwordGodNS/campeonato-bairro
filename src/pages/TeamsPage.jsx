import { Link } from "react-router-dom";
import { Shield, Trophy, Users, Search, Star, MapPin, Calendar, ArrowRight } from "lucide-react";

const teams = [
  { id: 1, name: "Real Norte", bairro: "Bairro Norte", since: "2018", logo: "/img/real-norte.png", color: "blue", players: 18, titles: 2, status: "Classificado" },
  { id: 2, name: "União FC", bairro: "Morro", since: "2017", logo: "/img/uniao-fc.png", color: "red", players: 20, titles: 1, status: "Classificado" },
  { id: 3, name: "Atlético Vila", bairro: "Vila Nova", since: "2020", logo: "", color: "yellow", players: 16, titles: 0, status: "Em disputa" },
  { id: 4, name: "Morro City", bairro: "Morro Alto", since: "2019", logo: "", color: "green", players: 19, titles: 1, status: "Em disputa" },
];

export default function TeamsPage() {
  return (
    <main className="teams-page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><Shield size={18} /> Clubes participantes</span>
        <h1>Times</h1>
        <p>Clubes cadastrados, escudos, bairro, elenco e títulos.</p>

        <div className="search-box"><Search size={19} /><input placeholder="Pesquisar time..." /></div>
      </section>

      <section className="quick-stats">
        <div><Trophy /><strong>4</strong><span>Times</span></div>
        <div><Users /><strong>73</strong><span>Atletas</span></div>
        <div><Star /><strong>4</strong><span>Títulos</span></div>
      </section>

      <section className="teams-grid-premium">
        {teams.map((team) => (
          <article key={team.id} className={`team-premium-card ${team.color}`}>
            <span className="team-status">{team.status}</span>
            <div className="team-logo-area">{team.logo ? <img src={team.logo} alt={team.name} /> : <Shield size={56} />}</div>
            <h2>{team.name}</h2>
            <p className="team-meta"><MapPin size={15} /> {team.bairro}</p>
            <p className="team-meta"><Calendar size={15} /> Desde {team.since}</p>
            <div className="team-numbers">
              <div><strong>{team.players}</strong><span>Jogadores</span></div>
              <div><strong>{team.titles}</strong><span>Títulos</span></div>
            </div>
            <Link to={`/times/${team.id}`} className="team-details-btn">Ver detalhes <ArrowRight size={17} /></Link>
          </article>
        ))}
      </section>
    </main>
  );
}
