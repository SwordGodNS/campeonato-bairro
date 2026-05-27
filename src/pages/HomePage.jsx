import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Shield, CalendarDays, Clock, MapPin, Users, BarChart3, Target, Star } from "lucide-react";
import { subscribeData } from "../data/firebaseStorage";

export default function HomePage() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [scorers, setScorers] = useState([]);

  useEffect(() => {
    const unsubTeams = subscribeData("teams", setTeams);
    const unsubPlayers = subscribeData("players", setPlayers);
    const unsubMatches = subscribeData("matches", setMatches);
    const unsubScorers = subscribeData("scorers", setScorers);

    return () => {
      unsubTeams();
      unsubPlayers();
      unsubMatches();
      unsubScorers();
    };
  }, []);

  const nextMatch = matches[0];
  const teamA = nextMatch ? { name: nextMatch.teamAName, logo: nextMatch.teamALogo } : teams[0];
  const teamB = nextMatch ? { name: nextMatch.teamBName, logo: nextMatch.teamBLogo } : teams[1];

  const topScorer = useMemo(() => scorers.sort((a, b) => Number(b.goals) - Number(a.goals))[0], [scorers]);

  return (
    <main className="premium-home">
      <div className="page-bg"></div>

      <section className="mobile-hero">
        <div className="badge"><Trophy size={18} /> COPA DO BAIRRO 2026</div>
        <h1>Campeonato de bairro com cara profissional</h1>
        <p>Times, confrontos, classificação, artilharia e painel para atualizar tudo em tempo real.</p>

        <div className="hero-actions">
          <Link to="/confronto" className="primary-btn">Ver confronto</Link>
          <Link to="/classificacao" className="secondary-btn">Classificação</Link>
        </div>
      </section>

      <section className="quick-stats">
        <div><strong>{teams.length}</strong><span>Times</span></div>
        <div><strong>{matches.length}</strong><span>Jogos</span></div>
        <div><strong>{players.length}</strong><span>Atletas</span></div>
      </section>

      <section className="next-battle-arena">
  <div className="arena-glow"></div>
  <div className="arena-lines"></div>

  <div className="battle-title">
    <span>🔥 Próximo Confronto</span>
    <h2>Duelo marcado</h2>
  </div>

  <div className="battle-stage">
    <div className="battle-team left-team">
      <div className="team-energy blue-energy"></div>

      <div className="battle-logo">
        {teamA?.logo ? <img src={teamA.logo} alt={teamA.name} /> : <Shield size={60} />}
      </div>

      <h3>{teamA?.name || "Time A"}</h3>
      <p>{nextMatch?.phase || "Aguardando fase"}</p>
    </div>

    <div className="battle-center">
      <span className="versus-fire">VS</span>
      <div className="pulse-ring"></div>
    </div>

    <div className="battle-team right-team">
      <div className="team-energy red-energy"></div>

      <div className="battle-logo">
        {teamB?.logo ? <img src={teamB.logo} alt={teamB.name} /> : <Shield size={60} />}
      </div>

      <h3>{teamB?.name || "Time B"}</h3>
      <p>{topScorer ? `Artilheiro: ${topScorer.name}` : "Aguardando dados"}</p>
    </div>
  </div>

  <div className="battle-info">
    <div>
      <CalendarDays size={18} />
      <strong>{nextMatch?.date || "Data a definir"}</strong>
    </div>

    <div>
      <Clock size={18} />
      <strong>{nextMatch?.time || "Horário a definir"}</strong>
    </div>

    <div>
      <MapPin size={18} />
      <strong>{nextMatch?.place || "Local a definir"}</strong>
    </div>
  </div>
</section>

      <section className="home-sections">
        <Link to="/times" className="feature-card"><Users /><h3>Times</h3><p>Clubes, escudos e detalhes.</p></Link>
        <Link to="/classificacao" className="feature-card"><BarChart3 /><h3>Classificação</h3><p>Pontos calculados pelos placares.</p></Link>
        <Link to="/artilharia" className="feature-card"><Target /><h3>Artilharia</h3><p>Ranking dos goleadores.</p></Link>
        <Link to="/confronto" className="feature-card"><Star /><h3>Confronto</h3><p>Próximo jogo em destaque.</p></Link>
      </section>
    </main>
  );
}
