import { motion } from "framer-motion";
import {
  Trophy,
  CalendarDays,
  Clock,
  MapPin,
  Users,
  BarChart3,
  Share2,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MatchPage() {
  return (
    <main className="confronto-page">
      <div className="confronto-bg"></div>
      <div className="confronto-overlay"></div>
      <div className="confronto-sparks"></div>

      <section className="confronto-header">
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Trophy className="cup-icon" />
          <h2>COPA DO BAIRRO</h2>
          <h1>2026</h1>
          <span>SEMIFINAL - JOGO 1</span>
        </motion.div>
      </section>

      <section className="confronto-arena">
        <motion.div
          className="confronto-team left-team"
          initial={{ opacity: 0, x: -160, rotate: -4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="team-glow blue-glow"></div>

          <motion.div
            className="team-logo-wrap"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img src="/img/real-norte.png" alt="Real Norte" />
          </motion.div>

          <h1>REAL NORTE</h1>
          <p>DESDE 2018</p>

          <div className="last-games">
            <h3>ÚLTIMOS JOGOS</h3>
            <div>
              <span className="win">V</span>
              <span className="win">V</span>
              <span className="draw">E</span>
              <span className="loss">D</span>
              <span className="win">V</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="confronto-vs"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          VS
        </motion.div>

        <motion.div
          className="confronto-team right-team"
          initial={{ opacity: 0, x: 160, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="team-glow red-glow"></div>

          <motion.div
            className="team-logo-wrap"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <img src="/img/uniao-fc.png" alt="União FC" />
          </motion.div>

          <h1>UNIÃO FC</h1>
          <p>DESDE 2017</p>

          <div className="last-games">
            <h3>ÚLTIMOS JOGOS</h3>
            <div>
              <span className="win">V</span>
              <span className="loss">D</span>
              <span className="win">V</span>
              <span className="win">V</span>
              <span className="draw">E</span>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        className="confronto-info"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div>
          <CalendarDays size={22} />
          <strong>18 DE MAIO</strong>
        </div>

        <div>
          <Clock size={22} />
          <strong>20:00</strong>
        </div>

        <div>
          <MapPin size={22} />
          <strong>CAMPO DO MORRO</strong>
        </div>
      </motion.section>

      <motion.section
        className="confronto-call"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <h2>A SEMIFINAL COMEÇA AGORA!</h2>
        <p>Quem avança para a grande final?</p>
      </motion.section>

      <section className="confronto-actions">
        <Link to="/times">
          <Users size={24} />
          VER ESCALAÇÕES
        </Link>

        <Link to="/classificacao">
          <BarChart3 size={24} />
          CLASSIFICAÇÃO
        </Link>

        <button>
          <Share2 size={24} />
          COMPARTILHAR
        </button>

        <Link to="/artilharia">
          <Target size={24} />
          ARTILHARIA
        </Link>
      </section>
    </main>
  );
}