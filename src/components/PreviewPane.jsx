export default function PreviewPane({theme}) {
  return (
    <div className={`ide__preview theme--${theme}`}>
      <div className={`ide__section-title theme--${theme}`}>Preview</div>
      <iframe id="preview" title="preview" />
    </div>
  );
}
