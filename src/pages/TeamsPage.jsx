import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  Trophy,
  Users,
  Search,
  Star,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";

const teams = [
  {
    id: 1,
    name: "Real Norte",
    bairro: "Bairro Norte",
    since: "2018",
    logo: "/img/real-norte.png",
    color: "blue",
    players: 18,
    titles: 2,
    status: "Classificado",
  },
  {
    id: 2,
    name: "União FC",
    bairro: "Morro",
    since: "2017",
    logo: "/img/uniao-fc.png",
    color: "red",
    players: 20,
    titles: 1,
    status: "Classificado",
  },
  {
    id: 3,
    name: "Atlético Vila",
    bairro: "Vila Nova",
    since: "2020",
    logo: "",
    color: "yellow",
    players: 16,
    titles: 0,
    status: "Em disputa",
  },
  {
    id: 4,
    name: "Morro City",
    bairro: "Morro Alto",
    since: "2019",
    logo: "",
    color: "green",
    players: 19,
    titles: 1,
    status: "Em disputa",
  },
];

export default function TeamsPage() {
  return (
    <main className="teams-page">
      <div className="teams-bg"></div>
      <div className="teams-overlay"></div>

      <section className="teams-hero">
        <motion.div
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="teams-badge">
            <Shield size={20} />
            Clubes participantes
          </span>

          <h1>Times da Competição</h1>
          <p>
            Veja os clubes cadastrados, escudos, elenco, bairro, títulos e
            detalhes de cada equipe.
          </p>
        </motion.div>

        <motion.div
          className="teams-search"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Search size={22} />
          <input placeholder="Pesquisar time..." />
        </motion.div>
      </section>

      <section className="teams-stats">
        <div>
          <Trophy />
          <strong>4</strong>
          <span>Times</span>
        </div>

        <div>
          <Users />
          <strong>73</strong>
          <span>Atletas</span>
        </div>

        <div>
          <Star />
          <strong>4</strong>
          <span>Títulos somados</span>
        </div>
      </section>

      <section className="teams-grid-premium">
        {teams.map((team, index) => (
          <motion.div
            key={team.id}
            className={`team-premium-card ${team.color}`}
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
          >
            <div className="team-card-light"></div>

            <div className="team-status">{team.status}</div>

            <div className="team-logo-area">
              {team.logo ? (
                <img src={team.logo} alt={team.name} />
              ) : (
                <div className="team-logo-empty">
                  <Shield size={58} />
                </div>
              )}
            </div>

            <h2>{team.name}</h2>

            <div className="team-meta">
              <span>
                <MapPin size={16} />
                {team.bairro}
              </span>

              <span>
                <Calendar size={16} />
                Desde {team.since}
              </span>
            </div>

            <div className="team-numbers">
              <div>
                <strong>{team.players}</strong>
                <span>Jogadores</span>
              </div>

              <div>
                <strong>{team.titles}</strong>
                <span>Títulos</span>
              </div>
            </div>

            <Link to={`/times/${team.id}`} className="team-details-btn">
              Ver detalhes
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}