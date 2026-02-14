export const INITIAL_FILES = [
  {
    id: "app",
    name: "App.jsx",
    language: "jsx",
    value: `
    
function App() {
  return (
    <div className="card">
      <p className="eyebrow">React Playground</p>
      <h1>Build fast. Preview instantly.</h1>
      <button className="primary">Ship it</button>
    </div>
  );
}

export default App;`
  },
  {
    id: "styles",
    name: "styles.css",
    language: "css",
    value: `/* your css here */`
  }
];
