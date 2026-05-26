import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Shield,
  TrendingUp,
  TrendingDown,
  Minus,
  Crown,
} from "lucide-react";

const classification = [
  {
    position: 1,
    team: "Real Norte",
    logo: "/img/real-norte.png",
    points: 15,
    games: 6,
    wins: 5,
    draws: 0,
    losses: 1,
    goalsFor: 14,
    goalsAgainst: 5,
    balance: 9,
    form: ["V", "V", "E", "D", "V"],
    status: "classificado",
  },
  {
    position: 2,
    team: "União FC",
    logo: "/img/uniao-fc.png",
    points: 13,
    games: 6,
    wins: 4,
    draws: 1,
    losses: 1,
    goalsFor: 12,
    goalsAgainst: 6,
    balance: 6,
    form: ["V", "D", "V", "V", "E"],
    status: "classificado",
  },
  {
    position: 3,
    team: "Atlético Vila",
    logo: "",
    points: 10,
    games: 6,
    wins: 3,
    draws: 1,
    losses: 2,
    goalsFor: 9,
    goalsAgainst: 7,
    balance: 2,
    form: ["V", "E", "D", "V", "D"],
    status: "disputa",
  },
  {
    position: 4,
    team: "Morro City",
    logo: "",
    points: 7,
    games: 6,
    wins: 2,
    draws: 1,
    losses: 3,
    goalsFor: 8,
    goalsAgainst: 11,
    balance: -3,
    form: ["D", "V", "D", "E", "V"],
    status: "disputa",
  },
  {
    position: 5,
    team: "Nova União",
    logo: "",
    points: 4,
    games: 6,
    wins: 1,
    draws: 1,
    losses: 4,
    goalsFor: 5,
    goalsAgainst: 13,
    balance: -8,
    form: ["D", "D", "V", "D", "E"],
    status: "eliminado",
  },
];

export default function ClassificationPage() {
  return (
    <main className="classification-page">
      <div className="classification-bg"></div>
      <div className="classification-overlay"></div>

      <section className="classification-hero">
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="classification-badge">
            <Trophy size={20} />
            Copa do Bairro 2026
          </span>

          <h1>Classificação</h1>
          <p>
            Acompanhe a tabela geral, pontuação, saldo de gols e desempenho dos
            times na competição.
          </p>
        </motion.div>
      </section>

      <section className="classification-cards">
        <motion.div
          className="classification-card leader"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Crown />
          <span>Líder</span>
          <strong>Real Norte</strong>
        </motion.div>

        <motion.div
          className="classification-card"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Medal />
          <span>Classificados</span>
          <strong>2 Times</strong>
        </motion.div>

        <motion.div
          className="classification-card"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TrendingUp />
          <span>Melhor ataque</span>
          <strong>14 Gols</strong>
        </motion.div>
      </section>

      <motion.section
        className="classification-table-box"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="classification-table-header">
          <h2>Tabela Geral</h2>

          <div className="classification-legend">
            <span>
              <i className="legend-qualified"></i>
              Classificado
            </span>
            <span>
              <i className="legend-fight"></i>
              Em disputa
            </span>
            <span>
              <i className="legend-out"></i>
              Eliminado
            </span>
          </div>
        </div>

        <div className="classification-table-scroll">
          <table className="classification-table">
            <thead>
              <tr>
                <th>Pos</th>
                <th>Time</th>
                <th>Pts</th>
                <th>J</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>GP</th>
                <th>GC</th>
                <th>SG</th>
                <th>Forma</th>
              </tr>
            </thead>

            <tbody>
              {classification.map((item, index) => (
                <motion.tr
                  key={item.position}
                  className={`table-row ${item.status}`}
                  initial={{ opacity: 0, x: -35 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <td>
                    <div className="position-box">
                      {item.position === 1 && <Crown size={16} />}
                      {item.position}º
                    </div>
                  </td>

                  <td>
                    <div className="team-table-info">
                      {item.logo ? (
                        <img src={item.logo} alt={item.team} />
                      ) : (
                        <div className="table-logo-empty">
                          <Shield size={22} />
                        </div>
                      )}

                      <strong>{item.team}</strong>
                    </div>
                  </td>

                  <td className="points">{item.points}</td>
                  <td>{item.games}</td>
                  <td>{item.wins}</td>
                  <td>{item.draws}</td>
                  <td>{item.losses}</td>
                  <td>{item.goalsFor}</td>
                  <td>{item.goalsAgainst}</td>

                  <td>
                    <span
                      className={
                        item.balance > 0
                          ? "balance positive"
                          : item.balance < 0
                          ? "balance negative"
                          : "balance neutral"
                      }
                    >
                      {item.balance > 0 && <TrendingUp size={15} />}
                      {item.balance < 0 && <TrendingDown size={15} />}
                      {item.balance === 0 && <Minus size={15} />}
                      {item.balance}
                    </span>
                  </td>

                  <td>
                    <div className="form-list">
                      {item.form.map((result, i) => (
                        <span
                          key={i}
                          className={
                            result === "V"
                              ? "win"
                              : result === "E"
                              ? "draw"
                              : "loss"
                          }
                        >
                          {result}
                        </span>
                      ))}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>
    </main>
  );
}