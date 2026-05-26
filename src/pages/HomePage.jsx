import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Trophy,
  Flame,
  Shield,
  CalendarDays,
  Clock,
  MapPin,
  Star,
  Users,
  BarChart3,
  Target,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="premium-home">
      <div className="home-bg"></div>
      <div className="home-dark"></div>
      <div className="particles"></div>

      <section className="premium-hero">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="badge">
            <Trophy size={20} />
            COPA DO BAIRRO 2026
          </div>

          <h1>
            O campeonato do bairro
            <span> com cara de profissional.</span>
          </h1>

          <p>
            Times, confrontos, classificação, artilharia, jogadores, árbitros,
            patrocinadores e painel de controle para o organizador atualizar tudo.
          </p>

          <div className="hero-actions">
            <Link to="/confronto" className="primary-btn">
              Ver confronto principal
            </Link>

            <Link to="/classificacao" className="secondary-btn">
              Ver classificação
            </Link>
          </div>

          <div className="quick-stats">
            <div>
              <strong>16</strong>
              <span>Times</span>
            </div>
            <div>
              <strong>32</strong>
              <span>Jogos</span>
            </div>
            <div>
              <strong>128</strong>
              <span>Atletas</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-match-card"
          initial={{ opacity: 0, scale: 0.85, x: 80 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="match-label">
            <Flame size={18} />
            Próximo confronto
          </div>

          <div className="match-teams">
            <div className="team-box blue">
              <div className="team-shield">
                <Shield size={58} />
              </div>
              <h2>REAL NORTE</h2>
              <span>Desde 2018</span>
            </div>

            <div className="versus">VS</div>

            <div className="team-box red">
              <div className="team-shield">
                <Shield size={58} />
              </div>
              <h2>UNIÃO FC</h2>
              <span>Desde 2017</span>
            </div>
          </div>

          <div className="match-details">
            <div>
              <CalendarDays size={18} />
              18 de Maio
            </div>
            <div>
              <Clock size={18} />
              20:00
            </div>
            <div>
              <MapPin size={18} />
              Campo do Morro
            </div>
          </div>
        </motion.div>
      </section>

      <section className="home-sections">
        <Link to="/times" className="feature-card">
          <Users />
          <h3>Times</h3>
          <p>Escudos, elenco, fotos e informações de cada equipe.</p>
        </Link>

        <Link to="/classificacao" className="feature-card">
          <BarChart3 />
          <h3>Classificação</h3>
          <p>Tabela organizada com pontos, vitórias e saldo de gols.</p>
        </Link>

        <Link to="/artilharia" className="feature-card">
          <Target />
          <h3>Artilharia</h3>
          <p>Ranking dos jogadores que mais balançaram a rede.</p>
        </Link>

        <Link to="/patrocinadores" className="feature-card">
          <Star />
          <h3>Patrocinadores</h3>
          <p>Espaço premium para marcas apoiarem o campeonato.</p>
        </Link>
      </section>
    </main>
  );
}