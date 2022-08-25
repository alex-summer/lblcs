import React, { useState, useEffect } from "react";
import PlayerForm from "./playersForm";
import playerService from "../../services/players";
import Team from "./team";

const Players = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    lolname: "",
    discordtag: "",
    team: "",
  });

  useEffect(() => {
    playerService.getAll().then((initialplayers) => setPlayers(initialplayers));
  }, []);

  const closeForm = () => setFormOpen(false);

  const addPlayer = (event) => {
    event.preventDefault();
    playerService.create(newPlayer).then((response) => {
      setFormOpen(false);
      setPlayers(players.concat(response));
      setNewPlayer({
        lolname: "",
        discordtag: "",
        team: "",
      });
    });
  };
  const trackChange = (event) => {
    const { name, value } = event.target;
    setNewPlayer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Players Page</h1>
      <button onClick={() => setFormOpen(true)}>New Player</button>
      {formOpen && (
        <PlayerForm
          onClick={closeForm}
          onSubmit={addPlayer}
          onChange={trackChange}
        />
      )}
      {players.map((team) => (
        <Team key={team.id} team={team} />
      ))}
    </div>
  );
};

export default Players;
