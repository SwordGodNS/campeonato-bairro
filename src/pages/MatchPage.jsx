import { Trophy, CalendarDays, Clock, MapPin, Users, BarChart3, Share2, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function MatchPage() {
  return (
    <main className="confronto-page">
      <div className="page-bg"></div>

      <section className="confronto-header">
        <Trophy className="cup-icon" />
        <h2>COPA DO BAIRRO</h2>
        <h1>2026</h1>
        <span>SEMIFINAL - JOGO 1</span>
      </section>

      <section className="mobile-matchup">
        <div className="match-team-card blue">
          <img src="/img/real-norte.png" alt="Real Norte" />
          <h2>Real Norte</h2>
          <p>Desde 2018</p>
          <div className="last-games"><span className="win">V</span><span className="win">V</span><span className="draw">E</span><span className="loss">D</span><span className="win">V</span></div>
        </div>

        <div className="versus big">VS</div>

        <div className="match-team-card red">
          <img src="/img/uniao-fc.png" alt="União FC" />
          <h2>União FC</h2>
          <p>Desde 2017</p>
          <div className="last-games"><span className="win">V</span><span className="loss">D</span><span className="win">V</span><span className="win">V</span><span className="draw">E</span></div>
        </div>
      </section>

      <section className="confronto-info">
        <div><CalendarDays size={19} /><strong>18 de Maio</strong></div>
        <div><Clock size={19} /><strong>20:00</strong></div>
        <div><MapPin size={19} /><strong>Campo do Morro</strong></div>
      </section>

      <section className="confronto-actions">
        <Link to="/times"><Users size={18} /> Times</Link>
        <Link to="/classificacao"><BarChart3 size={18} /> Classificação</Link>
        <Link to="/artilharia"><Target size={18} /> Artilharia</Link>
        <button><Share2 size={18} /> Compartilhar</button>
      </section>
    </main>
  );
}
