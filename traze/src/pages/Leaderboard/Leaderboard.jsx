import "./Leaderboard.css";
import LeaderboardData from "../../components/LeaderboardData/LeaderboardData";
import LeaderboardScore from "../../components/LeaderboardScore/LeaderboardScore";

import Layout from "../../Layout";

const Leaderboard = () => {
  return (
    <Layout>
      <div className="leaderboard">
        <h2>Scoreboard</h2>
        <LeaderboardScore></LeaderboardScore>
        <LeaderboardData />
        <LeaderboardData />
        <LeaderboardData />
        <LeaderboardData />
        <LeaderboardData />
      </div>
    </Layout>
  );
};

export default Leaderboard;
