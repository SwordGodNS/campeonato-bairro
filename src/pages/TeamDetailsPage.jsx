import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Shield, Users, Trophy, Calendar, ArrowLeft } from "lucide-react";
import { subscribeData } from "../data/firebaseStorage";

export default function TeamDetailsPage() {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    const unsubTeams = subscribeData("teams", setTeams);
    const unsubPlayers = subscribeData("players", setPlayers);

    return () => {
      unsubTeams();
      unsubPlayers();
    };
  }, []);

  const team = teams.find((item) => String(item.id) === String(id));
  const teamPlayers = useMemo(() => players.filter((player) => String(player.teamId) === String(id)), [players, id]);

  if (!team) {
    return (
      <main className="page">
        <div className="page-bg"></div>
        <section className="simple-card">
          <Shield size={54} />
          <h1>Time não encontrado</h1>
          <p>Cadastre ou confira o time no painel administrativo.</p>
          <Link to="/times" className="team-details-btn">Voltar para times</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="page-bg"></div>

      <section className="simple-card team-details-premium">
        <Link to="/times" className="back-link"><ArrowLeft size={18} /> Voltar</Link>

        <div className="team-logo-area big-logo">
          {team.logo ? <img src={team.logo} alt={team.name} /> : <Shield size={70} />}
        </div>

        <h1>{team.name}</h1>
        <p>{team.city || "Sem bairro"} • Desde {team.year || "----"}</p>

        <div className="quick-stats">
          <div><Users /><strong>{teamPlayers.length}</strong><span>Jogadores</span></div>
          <div><Trophy /><strong>{team.titles || 0}</strong><span>Títulos</span></div>
          <div><Calendar /><strong>{team.year || "----"}</strong><span>Desde</span></div>
        </div>
      </section>

      <section className="grid players-grid">
        {teamPlayers.length === 0 ? (
          <p className="empty-text">Nenhum jogador cadastrado para este time.</p>
        ) : (
          teamPlayers.map((player) => (
            <article className="player-premium-card card" key={player.id}>
              <div className="player-photo">{player.photo ? <img src={player.photo} alt={player.name} /> : <span>👤</span>}</div>
              <strong className="player-number">#{player.number}</strong>
              <h2>{player.name}</h2>
              <p>{player.position}</p>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
