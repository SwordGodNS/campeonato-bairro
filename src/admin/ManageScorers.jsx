import { useEffect, useState } from "react";
import { saveData, subscribeData } from "../data/firebaseStorage";

export default function ManageScorers() {
  const [players, setPlayers] = useState([]);
  const [scorers, setScorers] = useState([]);
  const [form, setForm] = useState({ playerId: "", goals: "" });

  useEffect(() => {
    const unsubPlayers = subscribeData("players", setPlayers);
    const unsubScorers = subscribeData("scorers", setScorers);

    return () => {
      unsubPlayers();
      unsubScorers();
    };
  }, []);

  async function saveScorer(e) {
    e.preventDefault();

    const player = players.find((item) => String(item.id) === String(form.playerId));

    if (!player) {
      alert("Selecione um jogador.");
      return;
    }

    const newScorer = {
      id: crypto.randomUUID(),
      playerId: player.id,
      name: player.name,
      teamId: player.teamId,
      teamName: player.teamName,
      photo: player.photo,
      goals: Number(form.goals || 0),
    };

    const updatedScorers = [
      ...scorers.filter((item) => item.playerId !== player.id),
      newScorer,
    ].sort((a, b) => b.goals - a.goals);

    await saveData("scorers", updatedScorers);
    setForm({ playerId: "", goals: "" });
    alert("Artilharia atualizada!");
  }

  async function deleteScorer(id) {
    await saveData("scorers", scorers.filter((item) => item.id !== id));
  }

  return (
    <section className="admin-card premium-form-card">
      <h2>Gerenciar Artilharia</h2>
      <p className="form-description">Escolha um jogador cadastrado e informe a quantidade de gols.</p>

      <form onSubmit={saveScorer} className="premium-form">
        <select value={form.playerId} onChange={(e) => setForm({ ...form, playerId: e.target.value })}>
          <option value="">Selecione o jogador</option>
          {players.map((player) => (
            <option key={player.id} value={player.id}>{player.name} - {player.teamName}</option>
          ))}
        </select>

        <input type="number" value={form.goals} onChange={(e) => setForm({ ...form, goals: e.target.value })} placeholder="Quantidade de gols" />

        <button type="submit">Salvar artilheiro</button>
      </form>

      <div className="registered-list">
        <h3>Ranking</h3>

        {scorers.length === 0 ? (
          <p className="empty-text">Nenhum artilheiro cadastrado.</p>
        ) : (
          scorers.map((scorer, index) => (
            <div className="registered-item" key={scorer.id}>
              {scorer.photo && <img src={scorer.photo} alt={scorer.name} className="registered-logo" />}
              <div>
                <strong>{index + 1}º {scorer.name}</strong>
                <span>{scorer.teamName} • {scorer.goals} gols</span>
              </div>
              <button type="button" onClick={() => deleteScorer(scorer.id)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
