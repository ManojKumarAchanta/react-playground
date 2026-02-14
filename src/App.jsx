import { useEffect, useMemo, useState } from "react";
import * as Babel from "@babel/standalone";

import Header from "./components/Header";
import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import PreviewPane from "./components/PreviewPane";

import { INITIAL_FILES } from "./constants/initialFiles";
import { PREVIEW_TEMPLATE } from "./constants/previewTemplate";

export default function App() {
  const [files, setFiles] = useState(INITIAL_FILES);
  const [activeFileId, setActiveFileId] = useState("app");

  const activeFile = useMemo(
    () => files.find((f) => f.id === activeFileId),
    [files, activeFileId]
  );

  useEffect(() => {
    const appFile = files.find((f) => f.id === "app");
    const stylesFile = files.find((f) => f.id === "styles");

    let compiledCode;

    try {
      compiledCode = Babel.transform(appFile.value, {
        presets: [["react", { runtime: "classic" }]]
      }).code;

      // Strip ES module exports so the iframe can execute in classic script mode.
      compiledCode = compiledCode
        .replace(/export\s+default\s+/g, "")
        .replace(/export\s+\{[^}]*\};?/g, "");
    } catch (error) {
      compiledCode = `throw new Error(${JSON.stringify(error.message)});`;
    }

    const iframe = document.getElementById("preview");
    iframe.srcdoc = PREVIEW_TEMPLATE({
      compiledCode,
      css: stylesFile.value
    });
  }, [files]);

  const updateActiveFile = (value) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === activeFileId ? { ...f, value } : f
      )
    );
  };

  return (
    <div className="ide">
      <Header />
      <section className="ide__surface">
        <FileExplorer
          files={files}
          activeFileId={activeFileId}
          setActiveFileId={setActiveFileId}
        />
        <CodeEditor file={activeFile} onChange={updateActiveFile} />
        <PreviewPane />
      </section>
    </div>
  );
}
