import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Trophy,
  Shield,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  BarChart3,
  Target,
  Star,
  Sparkles,
  Handshake,
} from "lucide-react";
import { subscribeData } from "../data/firebaseStorage";

export default function HomePage() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [matches, setMatches] = useState([]);
  const [scorers, setScorers] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const unsubTeams = subscribeData("teams", (data) => setTeams(Array.isArray(data) ? data : []));
    const unsubPlayers = subscribeData("players", (data) => setPlayers(Array.isArray(data) ? data : []));
    const unsubMatches = subscribeData("matches", (data) => setMatches(Array.isArray(data) ? data : []));
    const unsubScorers = subscribeData("scorers", (data) => setScorers(Array.isArray(data) ? data : []));
    const unsubSponsors = subscribeData("sponsors", (data) => setSponsors(Array.isArray(data) ? data : []));

    return () => {
      unsubTeams?.();
      unsubPlayers?.();
      unsubMatches?.();
      unsubScorers?.();
      unsubSponsors?.();
    };
  }, []);

  const nextMatch = matches[0];

  const teamA = nextMatch
    ? { name: nextMatch.teamAName || "Time A", logo: nextMatch.teamALogo || "" }
    : teams[0];

  const teamB = nextMatch
    ? { name: nextMatch.teamBName || "Time B", logo: nextMatch.teamBLogo || "" }
    : teams[1];

  const topScorer = useMemo(() => {
    return [...scorers].sort((a, b) => Number(b.goals || 0) - Number(a.goals || 0))[0];
  }, [scorers]);

  const infiniteSponsors = useMemo(() => {
    if (!sponsors.length) return [];
    return Array(16).fill(sponsors).flat();
  }, [sponsors]);

  return (
    <main className="premium-home home-pro">
      <div className="page-bg"></div>
      <div className="home-light home-light-blue"></div>
      <div className="home-light home-light-red"></div>

      <section className="mobile-hero home-hero-pro">
        <div className="badge home-badge">
          <Trophy size={18} /> COPA DO BAIRRO 2026
        </div>

        <h1>Campeonato de bairro com cara profissional</h1>

        <p>
          Times, confrontos, classificação, artilharia e painel para atualizar tudo em tempo real.
        </p>

        <div className="hero-actions">
          <Link to="/confronto" className="primary-btn">Ver confronto</Link>
          <Link to="/classificacao" className="secondary-btn">Classificação</Link>
        </div>
      </section>

      {sponsors.length > 0 && (
        <section className="home-led-sponsors">
          <div className="home-led-title">
            <Handshake size={17} />
            <span>Patrocinadores oficiais</span>
          </div>

          <div className="home-led-window">
            <div className="home-led-track">
              {infiniteSponsors.map((sponsor, index) => (
                <article className="home-led-card" key={`${sponsor.id || sponsor.name}-${index}`}>
                  <div className="home-led-logo">
                    {sponsor.logo ? (
                      <img src={sponsor.logo} alt={sponsor.name} />
                    ) : (
                      <Handshake size={28} />
                    )}
                  </div>
                  <strong>{sponsor.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="quick-stats home-stats-pro">
        <div><Users size={22} /><strong>{teams.length}</strong><span>Times</span></div>
        <div><Trophy size={22} /><strong>{matches.length}</strong><span>Jogos</span></div>
        <div><Target size={22} /><strong>{players.length}</strong><span>Atletas</span></div>
      </section>

      <section className="next-battle-arena home-battle-pro">
        <div className="arena-glow"></div>
        <div className="arena-lines"></div>

        <div className="battle-title">
          <span><Sparkles size={16} /> Próximo Confronto</span>
          <h2>Duelo marcado</h2>
        </div>

        <div className="battle-stage">
          <div className="battle-team left-team">
            <div className="team-energy blue-energy"></div>
            <div className="battle-logo">
              {teamA?.logo ? <img src={teamA.logo} alt={teamA.name || "Time A"} /> : <Shield size={60} />}
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
              {teamB?.logo ? <img src={teamB.logo} alt={teamB.name || "Time B"} /> : <Shield size={60} />}
            </div>
            <h3>{teamB?.name || "Time B"}</h3>
            <p>{topScorer ? `Artilheiro: ${topScorer.name}` : "Aguardando dados"}</p>
          </div>
        </div>

        <div className="battle-info">
          <div><CalendarDays size={18} /><strong>{nextMatch?.date || "Data a definir"}</strong></div>
          <div><Clock size={18} /><strong>{nextMatch?.time || "Horário a definir"}</strong></div>
          <div><MapPin size={18} /><strong>{nextMatch?.place || "Local a definir"}</strong></div>
        </div>
      </section>

      <section className="home-sections home-menu-pro">
        <Link to="/times" className="feature-card"><Users /><h3>Times</h3><p>Clubes, escudos e detalhes.</p></Link>
        <Link to="/classificacao" className="feature-card"><BarChart3 /><h3>Classificação</h3><p>Pontos calculados pelos placares.</p></Link>
        <Link to="/artilharia" className="feature-card"><Target /><h3>Artilharia</h3><p>Ranking dos goleadores.</p></Link>
        <Link to="/confronto" className="feature-card"><Star /><h3>Confronto</h3><p>Próximo jogo em destaque.</p></Link>
      </section>
    </main>
  );
}