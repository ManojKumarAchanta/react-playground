export default function FileExplorer({theme, files, activeFileId, setActiveFileId }) {
  return (
    <aside className={`ide__files theme--${theme}`}>
      <div className={`ide__section-title theme--${theme}`}>Files</div>
      {files.map((file) => (
        <button
          key={file.id}
          className={
            `ide__file theme--${theme}` +
            (file.id === activeFileId ? " ide__file--active" : "")
          }
          onClick={() => setActiveFileId(file.id)}
        >
          {file.name}
        </button>
      ))}
    </aside>
  );
}
