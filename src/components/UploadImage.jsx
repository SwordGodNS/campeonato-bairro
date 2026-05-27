import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";

export default function UploadImage({ label = "Enviar imagem", value, onChange }) {
  const [preview, setPreview] = useState(value || "");
  const [loading, setLoading] = useState(false);

  async function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!data.secure_url) {
        alert("Erro ao enviar imagem para o Cloudinary.");
        console.log(data);
        return;
      }

      setPreview(data.secure_url);
      onChange(data.secure_url);
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer upload da imagem.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="cloud-upload-box">
      <label className="cloud-upload-label">
        <ImagePlus size={22} />
        {label}
      </label>

      <input type="file" accept="image/*" onChange={handleFile} />

      {loading && (
        <div className="upload-loading">
          <Loader2 size={22} />
          Enviando imagem...
        </div>
      )}

      {preview && !loading && (
        <img src={preview} alt="Preview" className="cloud-upload-preview" />
      )}
    </div>
  );
}