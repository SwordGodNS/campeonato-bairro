import { motion } from "framer-motion";
import {
  Target,
  Trophy,
  Medal,
  Crown,
  Flame,
  Shield,
  TrendingUp,
} from "lucide-react";

const scorers = [
  {
    id: 1,
    name: "Pedro Henrique",
    team: "Real Norte",
    goals: 12,
    number: 9,
    position: "Atacante",
    photo: "",
    logo: "/img/real-norte.png",
  },
  {
    id: 2,
    name: "Gabriel Santos",
    team: "União FC",
    goals: 9,
    number: 10,
    position: "Meia",
    photo: "",
    logo: "/img/uniao-fc.png",
  },
  {
    id: 3,
    name: "Lucas Silva",
    team: "Atlético Vila",
    goals: 7,
    number: 11,
    position: "Ponta",
    photo: "",
    logo: "",
  },
  {
    id: 4,
    name: "Rafael Costa",
    team: "Morro City",
    goals: 6,
    number: 7,
    position: "Atacante",
    photo: "",
    logo: "",
  },
];

export default function TopScorersPage() {
  return (
    <main className="scorers-page">
      <div className="scorers-bg"></div>
      <div className="scorers-overlay"></div>

      <section className="scorers-hero">
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="scorers-badge">
            <Target size={20} />
            Ranking de Gols
          </span>

          <h1>Artilharia</h1>
          <p>
            Os jogadores que mais marcaram gols e decidiram partidas na competição.
          </p>
        </motion.div>
      </section>

      <section className="scorers-highlight">
        <motion.div
          className="top-scorer-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="top-glow"></div>

          <Crown className="top-crown" />

          <div className="top-photo">
            {scorers[0].photo ? (
              <img src={scorers[0].photo} alt={scorers[0].name} />
            ) : (
              <span>⚽</span>
            )}
          </div>

          <h2>{scorers[0].name}</h2>
          <p>{scorers[0].team}</p>

          <div className="top-goals">
            <strong>{scorers[0].goals}</strong>
            <span>Gols</span>
          </div>
        </motion.div>

        <div className="scorers-stats">
          <div>
            <Trophy />
            <span>Artilheiro</span>
            <strong>{scorers[0].name}</strong>
          </div>

          <div>
            <Flame />
            <span>Mais gols</span>
            <strong>{scorers[0].goals} gols</strong>
          </div>

          <div>
            <TrendingUp />
            <span>Média destaque</span>
            <strong>2.0 por jogo</strong>
          </div>
        </div>
      </section>

      <section className="scorers-table-box">
        <div className="scorers-table-header">
          <h2>Ranking Completo</h2>
          <span>Atualizado pelo painel administrativo</span>
        </div>

        <div className="scorers-list">
          {scorers.map((player, index) => (
            <motion.div
              key={player.id}
              className={`scorer-row position-${index + 1}`}
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <div className="scorer-position">
                {index === 0 ? <Crown size={20} /> : <Medal size={20} />}
                <strong>{index + 1}º</strong>
              </div>

              <div className="scorer-player">
                <div className="scorer-photo">
                  {player.photo ? (
                    <img src={player.photo} alt={player.name} />
                  ) : (
                    <span>👤</span>
                  )}
                </div>

                <div>
                  <h3>{player.name}</h3>
                  <p>
                    Nº {player.number} • {player.position}
                  </p>
                </div>
              </div>

              <div className="scorer-team">
                {player.logo ? (
                  <img src={player.logo} alt={player.team} />
                ) : (
                  <div className="scorer-team-empty">
                    <Shield size={22} />
                  </div>
                )}

                <span>{player.team}</span>
              </div>

              <div className="scorer-goals">
                <strong>{player.goals}</strong>
                <span>gols</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}