import {
    Trophy,
    CalendarDays,
    Clock,
    MapPin,
    Users,
    BarChart3,
    Share2,
    Target,
    Shield,
    Flame,
    Zap,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  import { useEffect, useMemo, useState } from "react";
  import { getData, subscribeData } from "../data/storage";
  
  export default function MatchPage() {
    const [matches, setMatches] = useState([]);
    const [teams, setTeams] = useState([]);
  
    function loadData() {
      setMatches(getData("matches") || []);
      setTeams(getData("teams") || []);
    }
  
    useEffect(() => {
      loadData();
      return subscribeData(loadData);
    }, []);
  
    const match = matches[0] || null;
  
    function findTeam(value) {
      if (!value) return null;
      const search = String(value).toLowerCase().trim();
  
      return teams.find((team) => {
        const options = [
          team.id,
          team.name,
          team.nome,
          team.teamName,
          team.title,
        ].map((item) => String(item || "").toLowerCase().trim());
  
        return options.includes(search);
      });
    }
  
    const teamA = useMemo(() => {
      return findTeam(match?.teamA || match?.teamAId || match?.timeA || match?.teamAName);
    }, [match, teams]);
  
    const teamB = useMemo(() => {
      return findTeam(match?.teamB || match?.teamBId || match?.timeB || match?.teamBName);
    }, [match, teams]);
  
    const teamAName =
      teamA?.name || teamA?.nome || match?.teamAName || match?.timeA || match?.teamA || "Time A";
  
    const teamBName =
      teamB?.name || teamB?.nome || match?.teamBName || match?.timeB || match?.teamB || "Time B";
  
    const teamALogo = teamA?.logo || teamA?.escudo || teamA?.image || match?.teamALogo || match?.logoA || "";
    const teamBLogo = teamB?.logo || teamB?.escudo || teamB?.image || match?.teamBLogo || match?.logoB || "";
  
    const teamAYear = teamA?.year || teamA?.since || teamA?.fundacao || "----";
    const teamBYear = teamB?.year || teamB?.since || teamB?.fundacao || "----";
  
    const phase = match?.phase || match?.fase || "Próximo confronto";
    const date = match?.date || match?.data || "Data a definir";
    const time = match?.time || match?.hora || "Horário a definir";
    const place = match?.place || match?.local || "Local a definir";
  
    const scoreA =
      match?.scoreA !== undefined && match?.scoreA !== "" && match?.scoreA !== null
        ? match.scoreA
        : match?.golsA !== undefined && match?.golsA !== "" && match?.golsA !== null
        ? match.golsA
        : "—";
  
    const scoreB =
      match?.scoreB !== undefined && match?.scoreB !== "" && match?.scoreB !== null
        ? match.scoreB
        : match?.golsB !== undefined && match?.golsB !== "" && match?.golsB !== null
        ? match.golsB
        : "—";
  
    function shareMatch() {
      const text = `${teamAName} x ${teamBName} - ${phase}`;
  
      if (navigator.share) {
        navigator.share({
          title: "Copa do Bairro",
          text,
          url: window.location.href,
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link copiado!");
      }
    }
  
    return (
      <main className="match-cinema-page">
        <div className="cinema-bg"></div>
        <div className="cinema-vignette"></div>
        <div className="cinema-lights"></div>
        <div className="cinema-sparks"></div>
        <div className="cinema-smoke"></div>
        <div className="cinema-energy"></div>
  
        <section className="cinema-header">
          <Trophy className="cinema-cup" />
          <h2>COPA DO BAIRRO</h2>
          <h1>2026</h1>
  
          <div className="cinema-phase">
            <Flame size={17} />
            {phase}
          </div>
        </section>
  
        <section className="cinema-arena">
          <article className="cinema-team cinema-left">
            <div className="team-flag"></div>
  
            <div className="cinema-logo">
              {teamALogo ? <img src={teamALogo} alt={teamAName} /> : <Shield />}
            </div>
  
            <h3>{teamAName}</h3>
            <p>Desde {teamAYear}</p>
          </article>
  
          <div className="cinema-center">
            <div className="center-lightning"></div>
  
            <div className="vs-circle">
              <Zap className="zap-icon" />
              <strong>VS</strong>
            </div>
  
            <div className="cinema-info">
              <div>
                <CalendarDays size={21} />
                <span>{date}</span>
              </div>
  
              <div>
                <Clock size={21} />
                <span>{time}</span>
              </div>
  
              <div>
                <MapPin size={21} />
                <span>{place}</span>
              </div>
            </div>
  
            <div className="cinema-call">
              <b>A batalha começa agora!</b>
              <span>Quem avança para a próxima fase?</span>
            </div>
          </div>
  
          <article className="cinema-team cinema-right">
            <div className="team-flag"></div>
  
            <div className="cinema-logo">
              {teamBLogo ? <img src={teamBLogo} alt={teamBName} /> : <Shield />}
            </div>
  
            <h3>{teamBName}</h3>
            <p>Desde {teamBYear}</p>
          </article>
        </section>
  
        <section className="cinema-score">
          <span>{teamAName}</span>
          <strong>{scoreA}</strong>
          <b>x</b>
          <strong>{scoreB}</strong>
          <span>{teamBName}</span>
        </section>
  
        <section className="cinema-actions">
          <Link to="/times">
            <Users size={21} />
            Ver times
          </Link>
  
          <Link to="/classificacao">
            <BarChart3 size={21} />
            Classificação
          </Link>
  
          <button type="button" onClick={shareMatch}>
            <Share2 size={21} />
            Compartilhar
          </button>
  
          <Link to="/artilharia">
            <Target size={21} />
            Artilharia
          </Link>
        </section>
      </main>
    );
  }