import { useState } from "react";

import ManageTeams from "../admin/ManageTeams";
import ManagePlayers from "../admin/ManagePlayers";
import ManageMatches from "../admin/ManageMatches";
import ManageScorers from "../admin/ManageScorers";
import ManageReferees from "../admin/ManageReferees";
import ManageSponsors from "../admin/ManageSponsors";

import {
  Trophy,
  Users,
  Shield,
  CalendarDays,
  Target,
  UserCheck,
  Handshake,
  ArrowLeft,
} from "lucide-react";

export default function AdminDashboard() {
  const [active, setActive] = useState(null);

  const sections = [
    {
      id: "times",
      title: "Times",
      text: "Cadastre escudos, nomes, bairros e dados dos times.",
      icon: <Shield />,
      component: <ManageTeams />,
    },
    {
      id: "jogadores",
      title: "Jogadores",
      text: "Adicione atletas, número, posição, foto e time.",
      icon: <Users />,
      component: <ManagePlayers />,
    },
    {
      id: "jogos",
      title: "Jogos",
      text: "Monte confrontos, datas, horários e locais.",
      icon: <CalendarDays />,
      component: <ManageMatches />,
    },
    {
      id: "artilharia",
      title: "Artilharia",
      text: "Atualize gols e ranking dos artilheiros.",
      icon: <Target />,
      component: <ManageScorers />,
    },
    {
      id: "arbitros",
      title: "Árbitros",
      text: "Cadastre árbitros e equipe de arbitragem.",
      icon: <UserCheck />,
      component: <ManageReferees />,
    },
    {
      id: "patrocinadores",
      title: "Patrocinadores",
      text: "Adicione logos e nomes dos apoiadores.",
      icon: <Handshake />,
      component: <ManageSponsors />,
    },
  ];

  const selected = sections.find((item) => item.id === active);

  return (
    <main className="admin-clean-page">
      {!selected ? (
        <>
          <section className="admin-clean-hero">
            <Trophy size={54} />
            <span>Área administrativa</span>
            <h1>Painel do Campeonato</h1>
            <p>
              Escolha abaixo o que deseja gerenciar. Tudo separado para qualquer
              pessoa conseguir mexer com facilidade.
            </p>
          </section>

          <section className="admin-clean-grid">
            {sections.map((item) => (
              <button
                key={item.id}
                className="admin-clean-card"
                onClick={() => setActive(item.id)}
              >
                <div className="admin-clean-icon">{item.icon}</div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <strong>Gerenciar agora →</strong>
              </button>
            ))}
          </section>
        </>
      ) : (
        <section className="admin-form-view">
          <button className="admin-back-btn" onClick={() => setActive(null)}>
            <ArrowLeft size={20} />
            Voltar ao painel
          </button>

          <div className="admin-form-header">
            <div className="admin-clean-icon">{selected.icon}</div>
            <div>
              <span>Gerenciando</span>
              <h1>{selected.title}</h1>
              <p>{selected.text}</p>
            </div>
          </div>

          <div className="admin-form-box">{selected.component}</div>
        </section>
      )}
    </main>
  );
}