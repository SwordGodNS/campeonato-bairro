import UploadImage from "../components/UploadImage";

export default function ManagePlayers() {
  return (
    <section className="admin-card">
      <h2>Gerenciar Jogadores</h2>
      <form>
        <input placeholder="Nome do jogador" />
        <input placeholder="Número" />
        <input placeholder="Posição" />
        <input placeholder="Time" />
        <UploadImage label="Foto do jogador" name="photo" />
        <button type="button">Salvar jogador</button>
      </form>
    </section>
  );
}
