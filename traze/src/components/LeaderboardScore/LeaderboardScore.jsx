import "./LeaderboardScore.css";
import dummyphoto from "../../img/facebook.png";

const LeaderboardScore = () => {
  const nameScoreboard = "Grace";

  return (
    <div className="scoreboard-wrapper">
      <div className="column">
        <img src={dummyphoto} alt="" />
        <p>{nameScoreboard}</p>
        <div className="row second">
          <p>2</p>
        </div>
      </div>
      <div className="column">
        <img src={dummyphoto} alt="" />
        <p>{nameScoreboard}</p>
        <div className="row">
          <p>1</p>
        </div>
      </div>
      <div className="column">
        <img src={dummyphoto} alt="" />
        <p>{nameScoreboard}</p>
        <div className="row first">
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScore;
