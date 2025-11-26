// src/components/App.tsx
import { useState } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import type { Votes, VoteType } from "../../types/votes";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";

export default function App() {

  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0
  }
  );

  const handleVote = (type: VoteType) => {
    setVotes({
      ...votes,
      [type]: votes[type] + 1,
    });
  };

  const resetVotes = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  const totalVotesCount: number = votes.good + votes.bad + votes.neutral;
  const positiveRateCount: number = totalVotesCount
    ? Math.round((votes.good / totalVotesCount) * 100)
    : 0;


  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotesCount > 0} />
      {
        totalVotesCount > 0 ?
          (<VoteStats
            votes={votes}
            totalVotes={totalVotesCount}
            positiveRate={positiveRateCount}
          />)
          :
          (<Notification />)
      }


    </div>
  );
}
