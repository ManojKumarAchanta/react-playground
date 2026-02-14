import {Moon} from "lucide-react"
import {Sun} from "lucide-react";

export default function Header({ theme, setTheme }) {
  return (
    <header className="ide__header">
      <div className="top-header">
        <div className="top-header-child">
          <p className="ide__tag">React Mini IDE</p>
          <h1>Type in files. See React render live.</h1>
        </div>
      </div>
      <div className="ide__status">
        <div className="shoutout">
          <strong className="personal-brand">Made with <span style={{color: "#e25555", fontSize: "14px"}}>❤</span> by <span className="name">{"Manoj Kumar Achanta"}</span></strong>
        </div>
        <div className="live-container">
          <span className="dot" /> Live
          <button 
            style={{cursor:"pointer",border:"none",borderRadius: "50%", width:"30px", height:"30px"}}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
