import "./LeaderboardScore.css";
import dummyphoto from "../../img/default-profile.jpg";

const LeaderboardScore = ({firstThree}) => {
  console.log(firstThree);

  return (
    <div className="scoreboard-wrapper">
      <div className="column">
        <img src={dummyphoto} alt="" />
        <p>{firstThree[1].username}</p>
        <div className="row second">
          <p>2</p>
        </div>
      </div>
      <div className="column">
        <img src={dummyphoto} alt="" />
        <p>{firstThree[0].username}</p>
        <div className="row">
          <p>1</p>
        </div>
      </div>
      <div className="column">
        <img src={dummyphoto} alt="" />
        <p>{firstThree[2].username}</p>
        <div className="row first">
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardScore;
