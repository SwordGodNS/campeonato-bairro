import { useEffect, useState } from "react";
import { getData, saveData, subscribeData } from "../data/storage";

export default function ManageMatches() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);

  const [form, setForm] = useState({
    phase: "",
    teamAId: "",
    teamBId: "",
    date: "",
    time: "",
    place: "",
    scoreA: "",
    scoreB: "",
  });

  function load() {
    setTeams(getData("teams"));
    setMatches(getData("matches"));
  }

  useEffect(() => {
    load();
    return subscribeData(load);
  }, []);

  function saveMatch(e) {
    e.preventDefault();

    const teamA = teams.find((team) => String(team.id) === String(form.teamAId));
    const teamB = teams.find((team) => String(team.id) === String(form.teamBId));

    if (!teamA || !teamB) {
      alert("Selecione os dois times.");
      return;
    }

    const newMatch = {
      id: crypto.randomUUID(),
      ...form,
      teamAName: teamA.name,
      teamBName: teamB.name,
      teamALogo: teamA.logo,
      teamBLogo: teamB.logo,
    };

    const updatedMatches = [...matches, newMatch];
    setMatches(updatedMatches);
    saveData("matches", updatedMatches);

    setForm({ phase: "", teamAId: "", teamBId: "", date: "", time: "", place: "", scoreA: "", scoreB: "" });

    alert("Jogo salvo com sucesso!");
  }

  function deleteMatch(id) {
    const updatedMatches = matches.filter((match) => match.id !== id);
    setMatches(updatedMatches);
    saveData("matches", updatedMatches);
  }

  return (
    <section className="admin-card premium-form-card">
      <h2>Gerenciar Jogos</h2>
      <p className="form-description">Monte confrontos usando os times já cadastrados.</p>

      <form onSubmit={saveMatch} className="premium-form">
        <input value={form.phase} onChange={(e) => setForm({ ...form, phase: e.target.value })} placeholder="Fase. Ex: Semifinal - Jogo 1" />

        <select value={form.teamAId} onChange={(e) => setForm({ ...form, teamAId: e.target.value })}>
          <option value="">Time A</option>
          {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
        </select>

        <select value={form.teamBId} onChange={(e) => setForm({ ...form, teamBId: e.target.value })}>
          <option value="">Time B</option>
          {teams.map((team) => <option key={team.id} value={team.id}>{team.name}</option>)}
        </select>

        <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
        <input type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
        <input value={form.place} onChange={(e) => setForm({ ...form, place: e.target.value })} placeholder="Local do jogo" />
        <input type="number" value={form.scoreA} onChange={(e) => setForm({ ...form, scoreA: e.target.value })} placeholder="Placar do Time A" />
        <input type="number" value={form.scoreB} onChange={(e) => setForm({ ...form, scoreB: e.target.value })} placeholder="Placar do Time B" />

        <button type="submit">Salvar jogo</button>
      </form>

      <div className="registered-list">
        <h3>Jogos cadastrados</h3>

        {matches.length === 0 ? (
          <p className="empty-text">Nenhum jogo cadastrado ainda.</p>
        ) : (
          matches.map((match) => (
            <div className="registered-item" key={match.id}>
              <div>
                <strong>{match.teamAName} x {match.teamBName}</strong>
                <span>{match.phase} • {match.date} às {match.time} • {match.place}</span>
              </div>

              <button type="button" onClick={() => deleteMatch(match.id)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
