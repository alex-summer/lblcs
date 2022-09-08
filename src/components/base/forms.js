import React, { useState } from "react";
import "./forms.css"

const Forms = ({ formTitle, data, onClick }) => {
    // const buildFormQuestions = (formTitle) => {
    //     let formQuestions = [];

    // }

    //Gets data parameter and turns it into an object with blank values to
    //fill out the initial state of the form.
    const fields = data.reduce((o, key) => ({ ...o, [key.name]: "" }), {})
    const [newItem, setNewItem] = useState(fields);

    const trackChange = (event) => {
        const { name, value } = event.target;
        setNewItem((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(newItem)
    };


    return (

        <div className="formContainer">
            <button className="close" onClick={onClick}>x</button>
            <h1>{formTitle}</h1>
            <div className="form">
                <form onChange={trackChange}>
                    <label htmlFor="lolname"> Player Name (LoL name)</label>
                    <input type="text" name="lol name" />
                    <label htmlFor="discordtag">Discord Tag</label>
                    <input type="text" name="Discord Tag" />
                    <button className="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Forms