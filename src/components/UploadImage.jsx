export default function UploadImage({ label, name, onChange }) {
  return (
    <label className="upload-box">
      <span>{label}</span>
      <input type="file" name={name} accept="image/*" onChange={onChange} />
    </label>
  );
}
