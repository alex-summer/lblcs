import List from '../base/lists'
import React, { useState } from "react";


const Players = () => {
    const url = 'http://localhost:3000/players'
    const pageTitle = 'Players'
    const [formOpen, setFormOpen] = useState(false);


    return (
        <div>
            <button onClick={() => setFormOpen(true)}>New Player</button>
            <List url={url} pageTitle={pageTitle} />
        </div>
    )
}

export default Players;
