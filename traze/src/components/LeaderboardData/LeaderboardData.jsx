import "./LeaderboardData.css";

const LeaderboardData = () => {
  const Rank = 1;
  const Name = "Grace Claudia Bla";
  const Point = 3666;

  return (
    <div className="LeaderboardData">
      <div className="name-container">
        <div className="leaderboard-info">
          <p>#{Rank}</p>
          <p>{Name}</p>
          <p>{Point}</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardData;
