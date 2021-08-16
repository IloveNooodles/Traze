import "./LeaderboardData.css";

const LeaderboardData = ({ name, rank, score }) => {
  // const Rank = 1;
  // const Name = "Grace Claudia Bla";
  // const Point = 3666;

  return (
    <div className="LeaderboardData">
      <div className="name-container">
        <div className="leaderboard-info">
          <p>#{rank}</p>
          <p>{name}</p>
          <p>{score}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardData;
