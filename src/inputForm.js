import React, { useState } from "react";

const inputForm = ({ onSubmit }) => {
    const [noun, setNoun] = useState('')
    const [secondNoun, setSecondNoun] = useState('')
    const [adjective, setAdjective] = useState('')
    const [color, setColor] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ noun, secondNoun, adjective, color })
    }

    return (
        <form>
            <label>
                Noun:
                <input type="text" value={noun} onChange={(event) => setNoun(event.target.value)} required></input>
            </label>
            <br/>
            <label>
                Second Noun:
                <input type="text" value={secondNoun} onChange={(event) => setSecondNoun(event.target.value)} required></input>
            </label>
            <br/>
            <label>
                Adjective:
                <input type="text" value={adjective} onChange={(event) => setAdjective(event.target.value)} required></input>
            </label>
            <br/>
            <label>
                Color:
                <input type="text" value={color} onChange={(event) => setColor(event.target.value)} required></input>
            </label>
            <br/>
            <button type="submit">Create Story</button>
        </form>
    )
}

export default inputForm;