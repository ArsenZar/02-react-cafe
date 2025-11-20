// src/components/App.tsx
import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import { Votes, VoteType } from "../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";

export default function App() {  

  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  }
  );

  const handleVote = (type) => {

  }

  const resetVotes = () => { }


  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={ true } />
    </div>
  );
}
