export default function PreviewPane() {
  return (
    <div className="ide__preview">
      <div className="ide__section-title">Preview</div>
      <iframe id="preview" title="preview" />
    </div>
  );
}
