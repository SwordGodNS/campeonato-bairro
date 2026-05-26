import { ImagePlus } from "lucide-react";

export default function UploadImage({ label = "Enviar imagem", name, onChange }) {
  return (
    <label className="upload-box-pro">
      <ImagePlus size={24} />
      <span>{label}</span>
      <small>PNG, JPG ou WEBP</small>
      <input type="file" name={name} accept="image/*" onChange={onChange} />
    </label>
  );
}
