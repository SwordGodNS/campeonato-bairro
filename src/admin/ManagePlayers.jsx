import { useEffect, useState } from "react";
import UploadImage from "../components/UploadImage";
import { getData, saveData, subscribeData } from "../data/storage";

const positions = [
  "Goleiro",
  "Zagueiro",
  "Lateral Direito",
  "Lateral Esquerdo",
  "Volante",
  "Meia Defensivo",
  "Meia Central",
  "Meia Ofensivo",
  "Ponta Direita",
  "Ponta Esquerda",
  "Segundo Atacante",
  "Centroavante",
  "Atacante",
];

const numbers = Array.from({ length: 99 }, (_, i) => i + 1);

export default function ManagePlayers() {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [showShirts, setShowShirts] = useState(false);

  const [form, setForm] = useState({
    name: "",
    teamId: "",
    position: "",
    number: "",
    photo: "",
  });

  function load() {
    setTeams(getData("teams"));
    setPlayers(getData("players"));
  }

  useEffect(() => {
    load();
    return subscribeData(load);
  }, []);

  function savePlayer(e) {
    e.preventDefault();

    if (!form.name || !form.teamId || !form.position || !form.number) {
      alert("Preencha nome, time, posição e número.");
      return;
    }

    const selectedTeam = teams.find((team) => String(team.id) === String(form.teamId));

    const newPlayer = {
      id: crypto.randomUUID(),
      name: form.name.trim(),
      teamId: form.teamId,
      teamName: selectedTeam?.name || "",
      teamLogo: selectedTeam?.logo || "",
      position: form.position,
      number: form.number,
      photo: form.photo,
      goals: 0,
    };

    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
    saveData("players", updatedPlayers);

    setForm({ name: "", teamId: "", position: "", number: "", photo: "" });

    alert("Jogador cadastrado com sucesso!");
  }

  function deletePlayer(id) {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
    saveData("players", updatedPlayers);
  }

  return (
    <section className="admin-card premium-form-card">
      <h2>Gerenciar Jogadores</h2>
      <p className="form-description">
        Escolha o time já cadastrado, selecione a posição, foto e número da camisa.
      </p>

      {teams.length === 0 && (
        <div className="warning-box">Cadastre pelo menos um time antes de adicionar jogadores.</div>
      )}

      <form onSubmit={savePlayer} className="premium-form">
        <input
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Nome do jogador"
        />

        <select
          name="teamId"
          value={form.teamId}
          onChange={(e) => setForm({ ...form, teamId: e.target.value })}
        >
          <option value="">Selecione o time</option>
          {teams.map((team) => (
            <option key={team.id} value={team.id}>{team.name}</option>
          ))}
        </select>

        <select
          name="position"
          value={form.position}
          onChange={(e) => setForm({ ...form, position: e.target.value })}
        >
          <option value="">Selecione a posição</option>
          {positions.map((position) => (
            <option key={position} value={position}>{position}</option>
          ))}
        </select>

        <div className="shirt-picker">
          <button type="button" className="shirt-toggle" onClick={() => setShowShirts(!showShirts)}>
            {form.number ? `Camisa escolhida: ${form.number}` : "Escolher número da camisa"}
          </button>

          {showShirts && (
            <div className="shirt-grid">
              {numbers.map((number) => (
                <button
                  type="button"
                  key={number}
                  className={String(form.number) === String(number) ? "shirt active" : "shirt"}
                  onClick={() => {
                    setForm({ ...form, number });
                    setShowShirts(false);
                  }}
                >
                  <span>{number}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <UploadImage
          label="Foto do jogador"
          value={form.photo}
          onChange={(url) => setForm({ ...form, photo: url })}
        />

        <button type="submit">Salvar jogador</button>
      </form>

      <div className="registered-list">
        <h3>Jogadores cadastrados</h3>

        {players.length === 0 ? (
          <p className="empty-text">Nenhum jogador cadastrado ainda.</p>
        ) : (
          players.map((player) => (
            <div className="registered-item" key={player.id}>
              {player.photo && <img src={player.photo} alt={player.name} className="registered-logo" />}

              <div>
                <strong>#{player.number} {player.name}</strong>
                <span>{player.position} • {player.teamName}</span>
              </div>

              <button type="button" onClick={() => deletePlayer(player.id)}>Remover</button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
