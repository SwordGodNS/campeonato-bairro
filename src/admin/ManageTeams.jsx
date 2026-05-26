import UploadImage from "../components/UploadImage";

export default function ManageTeams() {
  return (
    <section className="admin-card">
      <h2>Gerenciar Times</h2>
      <form>
        <input placeholder="Nome do time" />
        <input placeholder="Bairro/Cidade" />
        <input placeholder="Ano de fundação" />
        <UploadImage label="Escudo do time" name="logo" />
        <button type="button">Salvar time</button>
      </form>
    </section>
  );
}
