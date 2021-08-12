import "./Leaderboard.css";
import LeaderboardData from "../../components/LeaderboardData/LeaderboardData";
import LeaderboardScore from '../../components/LeaderboardScore/LeaderboardScore'

import Arrow from "../../img/backArrow-png";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <LeaderboardScore></LeaderboardScore>
      <LeaderboardData />
      <LeaderboardData />
      <LeaderboardData />
      <LeaderboardData />
      <LeaderboardData />
    </div>
  );
};

export default Leaderboard;
