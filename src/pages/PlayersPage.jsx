import { useEffect, useState } from "react";
import { Search, Shield, Users } from "lucide-react";
import { getData, subscribeData } from "../data/storage";

export default function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  function load() {
    setPlayers(getData("players"));
  }

  useEffect(() => {
    load();
    return subscribeData(load);
  }, []);

  const filtered = players.filter((player) =>
    `${player.name} ${player.teamName} ${player.position}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="page players-page">
      <div className="page-bg"></div>

      <section className="page-hero">
        <span className="badge"><Users size={18} /> Elenco da competição</span>
        <h1>Jogadores</h1>
        <p>Todos os atletas cadastrados no painel aparecem aqui automaticamente.</p>

        <div className="search-box">
          <Search size={19} />
          <input placeholder="Pesquisar jogador, time ou posição..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </section>

      <section className="grid players-grid">
        {filtered.length === 0 ? (
          <p className="empty-text">Nenhum jogador cadastrado ainda.</p>
        ) : (
          filtered.map((player) => (
            <article className="player-premium-card card" key={player.id}>
              <div className="player-photo">
                {player.photo ? <img src={player.photo} alt={player.name} /> : <span>👤</span>}
              </div>
              <strong className="player-number">#{player.number}</strong>
              <h2>{player.name}</h2>
              <p>{player.position}</p>
              <div className="player-team">
                {player.teamLogo ? <img src={player.teamLogo} alt={player.teamName} /> : <Shield size={18} />}
                <span>{player.teamName || "Sem time"}</span>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
  );
}
