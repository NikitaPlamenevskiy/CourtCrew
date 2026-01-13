import { MatchCard } from "./MatchCard";

function Matches() {
  return (
    <>
      <h1>Matches</h1>
      <div
        style={{
          display: "flex",
          gap: "30px",
          overflow: "scroll",
          scrollbarWidth: "none",
        }}
      >
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
    </>
  );
}

export { Matches };
