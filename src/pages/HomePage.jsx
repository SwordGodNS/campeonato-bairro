import { Link } from "react-router-dom";
import { Trophy, Flame, Shield, CalendarDays, Clock, MapPin, Users, BarChart3, Target, Star } from "lucide-react";

export default function HomePage() {
  return (
    <main className="premium-home">
      <div className="page-bg"></div>

      <section className="mobile-hero">
        <div className="badge"><Trophy size={18} /> COPA DO BAIRRO 2026</div>

        <h1>Campeonato de bairro com cara profissional</h1>
        <p>Times, confrontos, classificação, artilharia e painel para atualizar tudo.</p>

        <div className="hero-actions">
          <Link to="/confronto" className="primary-btn">Ver confronto</Link>
          <Link to="/classificacao" className="secondary-btn">Classificação</Link>
        </div>
      </section>

      <section className="quick-stats">
        <div><strong>16</strong><span>Times</span></div>
        <div><strong>32</strong><span>Jogos</span></div>
        <div><strong>128</strong><span>Atletas</span></div>
      </section>

      <section className="mobile-match-card">
        <div className="match-label"><Flame size={17} /> Próximo confronto</div>

        <div className="mobile-versus-card">
          <div className="mini-team blue">
            <Shield size={44} />
            <strong>Real Norte</strong>
            <span>Desde 2018</span>
          </div>

          <div className="versus">VS</div>

          <div className="mini-team red">
            <Shield size={44} />
            <strong>União FC</strong>
            <span>Desde 2017</span>
          </div>
        </div>

        <div className="match-details">
          <div><CalendarDays size={17} />18 de Maio</div>
          <div><Clock size={17} />20:00</div>
          <div><MapPin size={17} />Campo do Morro</div>
        </div>
      </section>

      <section className="home-sections">
        <Link to="/times" className="feature-card"><Users /><h3>Times</h3><p>Clubes, escudos e detalhes.</p></Link>
        <Link to="/classificacao" className="feature-card"><BarChart3 /><h3>Classificação</h3><p>Pontos, vitórias e saldo.</p></Link>
        <Link to="/artilharia" className="feature-card"><Target /><h3>Artilharia</h3><p>Ranking dos goleadores.</p></Link>
        <Link to="/confronto" className="feature-card"><Star /><h3>Confronto</h3><p>Próximo jogo em destaque.</p></Link>
      </section>
    </main>
  );
}
