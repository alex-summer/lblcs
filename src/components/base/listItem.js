import "../base/lists.css";
import icon from "../../assets/coins.png";

const ListItem = ({ item1, item2 }) => {
  return (
    <li>
      <div className="listItem">
        <img className="icon" src={icon} alt="" />
        <h1 className="item1">{item1}</h1>
        <h2 className="item2">{item2}</h2>
      </div>
    </li>
  );
};

export default ListItem;
