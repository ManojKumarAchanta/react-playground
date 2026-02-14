import Editor from "@monaco-editor/react";

export default function CodeEditor({ file, onChange }) {
  return (
    <div className="ide__editor">
      <div className="ide__section-title">{file.name}</div>
      <Editor
        height="100%"
        language={file.language === "jsx" ? "javascript" : file.language}
        theme="vs-dark"
        value={file.value}
        onChange={(value) => onChange(value)}
        options={{
          fontFamily: "Fira Code, monospace",
          fontSize: 14,        
          fontLigatures: true, 
          minimap: { enabled: false },
          cursorSmoothCaretAnimation: true,
          automaticLayout: true,
        }}
      />
    </div>
  );
}
