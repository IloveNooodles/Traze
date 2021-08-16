import { useState, useEffect } from 'react';

import * as api from '../../api/index.js';
import "./Leaderboard.css";
import LeaderboardData from "../../components/LeaderboardData/LeaderboardData";
import LeaderboardScore from "../../components/LeaderboardScore/LeaderboardScore";

import Layout from "../../Layout";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    api.getLeaderboard()
      .then(res => {
        setLeaderboard(res.data);
      })
      .catch(error => console.log(error));
  }, [])

  return (
    <Layout>
      <div className="leaderboard">
        <h2>Leaderboard</h2>
        {leaderboard.length === 0 ? <></> : <LeaderboardScore firstThree={leaderboard.slice(0, 3)}></LeaderboardScore>}
        {leaderboard.map((el, i) => <LeaderboardData key={el._id} name={el.username} rank={i+1} score={el.score}/>)}
      </div>
    </Layout>
  );
};

export default Leaderboard;
