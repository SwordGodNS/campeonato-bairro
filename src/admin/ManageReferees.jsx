import UploadImage from "../components/UploadImage";

export default function ManageReferees() {
  return (
    <section className="admin-card">
      <h2>Gerenciar Árbitros</h2>
      <form>
        <input placeholder="Nome do árbitro" />
        <input placeholder="Função" />
        <UploadImage label="Foto do árbitro" name="referee" />
        <button type="button">Salvar árbitro</button>
      </form>
    </section>
  );
}
