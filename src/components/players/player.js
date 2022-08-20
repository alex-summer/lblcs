import "../../styles/lists.css";
import pfp from "../../assets/pfp.png";

const Player = ({ player }) => {
  return (
    <li>
      <div className="listItem">
        <img className="pfp" src={pfp} alt="" />
        <h1 className="lolname">{player.lolname}</h1>
        <h2 className="team">{player.team}</h2>
      </div>
    </li>
  );
};

export default Player;
