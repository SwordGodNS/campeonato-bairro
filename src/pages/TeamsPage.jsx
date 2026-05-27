import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Trophy, Users, Search, Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import { subscribeData } from "../data/firebaseStorage";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const unsubTeams = subscribeData("teams", setTeams);
    const unsubPlayers = subscribeData("players", setPlayers);

    return () => {
      unsubTeams();
      unsubPlayers();
    };
  }, []);

  const filteredTeams = teams.filter((team) => team.name?.toLowerCase().includes(search.toLowerCase()));

  const totalTitles = useMemo(() => teams.reduce((total, team) => total + Number(team.titles || 0), 0), [teams]);

  return (
    <main className="teams-page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><Shield size={18} /> Clubes participantes</span>
        <h1>Times</h1>
        <p>Clubes cadastrados pelo painel administrativo, com escudos salvos no Cloudinary.</p>

        <div className="search-box">
          <Search size={19} />
          <input placeholder="Pesquisar time..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </section>

      <section className="quick-stats">
        <div><Trophy /><strong>{teams.length}</strong><span>Times</span></div>
        <div><Users /><strong>{players.length}</strong><span>Atletas</span></div>
        <div><Star /><strong>{totalTitles}</strong><span>Títulos</span></div>
      </section>

      <section className="teams-grid-premium">
        {filteredTeams.length === 0 ? (
          <p className="empty-text">Nenhum time cadastrado ainda.</p>
        ) : (
          filteredTeams.map((team) => {
            const teamPlayers = players.filter((player) => String(player.teamId) === String(team.id));
            return (
              <article key={team.id} className="team-premium-card">
                <span className="team-status">{team.status || "Cadastrado"}</span>

                <div className="team-logo-area">
                  {team.logo ? <img src={team.logo} alt={team.name} /> : <Shield size={56} />}
                </div>

                <h2>{team.name}</h2>
                <p className="team-meta"><MapPin size={15} /> {team.city || team.bairro || "Sem bairro"}</p>
                <p className="team-meta"><Calendar size={15} /> Desde {team.year || team.since || "----"}</p>

                <div className="team-numbers">
                  <div><strong>{teamPlayers.length}</strong><span>Jogadores</span></div>
                  <div><strong>{team.titles || 0}</strong><span>Títulos</span></div>
                </div>

                <Link to={`/times/${team.id}`} className="team-details-btn">
                  Ver detalhes <ArrowRight size={17} />
                </Link>
              </article>
            );
          })
        )}
      </section>
    </main>
  );
}
