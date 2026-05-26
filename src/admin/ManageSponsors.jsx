import UploadImage from "../components/UploadImage";

export default function ManageSponsors() {
  return (
    <section className="admin-card">
      <h2>Gerenciar Patrocinadores</h2>
      <form>
        <input placeholder="Nome do patrocinador" />
        <UploadImage label="Logo do patrocinador" name="sponsor" />
        <button type="button">Salvar patrocinador</button>
      </form>
    </section>
  );
}
