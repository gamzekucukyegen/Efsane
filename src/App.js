import "./styles.css";
import { useState, useEffect } from "react";

import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

export default function App() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setPlayerName((prevName) => prevName.trim() + " The King");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TopSection submitted={submitted} />
      <input className="name-input" type="text" maxLength={16} placeholder="Karakterinizin Adını Girin" required disabled={submitted} value={playerName} onChange={(e)=>setPlayerName(e.target.value)}/>
      <BottomSection submitted={submitted} playerName={playerName} />
    </form>
  );
}
