import Editor from "@monaco-editor/react";

export default function CodeEditor({ theme, file, onChange }) {
  return (
    <div className={`ide__editor theme--${theme}`}>
      <div className={`ide__section-title theme--${theme}`}>{file.name}</div>
      <Editor
        height="100%"
        language={file.language === "jsx" ? "javascript" : file.language}
        theme={theme === "dark" ? "vs-dark" : "light"}
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
