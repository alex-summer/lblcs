import "../base/lists.css";

const ListItem = ({ item1 }) => {
  return (
    <li>
      <div className="listItem">
        <h1 className="item1">{item1}</h1>
      </div>
    </li>
  );
};

export default ListItem;
