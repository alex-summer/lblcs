import List from '../base/lists'
//mport PlayerForm from '../../assets/forms/newPlayer.json'
import Button from '../base/button'
import React, { useState } from "react";
import Form from '../base/forms'
import FormData from '../../assets/forms/newPlayer.json'



const Players = () => {
    const url = 'http://localhost:3001/players'
    const [formOpen, setFormOpen] = useState(false);
    const closeForm = () => setFormOpen(false);


    return (
        <div>
            <h1>Players</h1>
            <Button
                onClick={() => { setFormOpen(true) }}
            />
            {formOpen && (
                <Form
                    formTitle={"New Player"}
                    data={FormData.items}
                    onClick={closeForm}

                />
            )}
            <List url={url} />
        </div>
    )
}

export default Players;
