export default function FileExplorer({ files, activeFileId, setActiveFileId }) {
  return (
    <aside className="ide__files">
      <div className="ide__section-title">Files</div>
      {files.map((file) => (
        <button
          key={file.id}
          className={
            file.id === activeFileId
              ? "ide__file ide__file--active"
              : "ide__file"
          }
          onClick={() => setActiveFileId(file.id)}
        >
          {file.name}
        </button>
      ))}
    </aside>
  );
}
