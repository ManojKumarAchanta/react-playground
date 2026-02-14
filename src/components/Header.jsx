export default function Header() {
  return (
    <header className="ide__header">
      <div>
        <p className="ide__tag">React Mini IDE</p>
        <h1>Type in files. See React render live.</h1>
      </div>
      <div className="ide__status">
        <span className="dot" /> Live
      </div>
    </header>
  );
}
