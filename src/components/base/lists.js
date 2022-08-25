import React, { useState, useEffect } from "react";
import networkService from "../../services/network";
import ListItem from "./listItem";

const Lists = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    networkService.getAll(props.url).then((initialItems) => setItems(initialItems));
  }, [url]);
  return (
    <div>
      <h1>{pageTitle}</h1>
      <button onClick={() => setFormOpen(true)}>New Player</button>
      {items.map((item) => (
        <ListItem key={item.id} player={item} />
      ))}
    </div>
  );
};
export default Lists;
