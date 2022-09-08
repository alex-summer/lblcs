import React, { useState, useEffect } from "react";
import networkService from "../../services/network";
import ListItem from "./listItem";


const Lists = (props) => {

  const [items, setItems] = useState([]);


  useEffect(() => {
    networkService.getAll(props.url).then((initialItems) => setItems(initialItems));
  }, [props.url]);
  return (
    <div className="list">
      {items.map((item) => (
        <ListItem key={item.id} item1={item.lolname} item2={item.team} />
      ))}
    </div>
  );
};
export default Lists;
