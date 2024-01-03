import React, { useState } from "react";
import InputForm from "./InputForm";
import MadlibDisplay from "./MadlibDisplay";
import RestartButton from "./RestartButton";

const madlibStories = [
    'There was a {color} {noun} who loved a {adjective} {secondNoun}',
    'The {adjective} {noun} jumped over the {color} {secondNoun}.',
    'In a land of {adjective} {color} {secondNoun}, a brave {noun} saved the day.',
    'A {adjective} {noun} and a {color} {secondNoun} went on a picnic together.',
    'Once upon a time, a {color} {adjective} {secondNoun} and a {noun} became best friends.'
];

const getRandomStory = () => {
    const randomIndex = Math.floor(Math.random() * madlibStories.length)
    return madlibStories[randomIndex];
}

const MadlibGen = () => {
    const [madlib, setMadlib] = useState(null)
    const createMadlib = ({ noun, secondNoun, adjective, color }) => {
        const template = getRandomStory()
        const formattedMadlib = template
            .replace('{noun}', noun)
            .replace('{secondNoun}', secondNoun)
            .replace('{adjective}', adjective)
            .replace('{color}', color);
        setMadlib(formattedMadlib)}
    const restartMadlib = () => {
        setMadlib(null)}
    return (
        <div>
            {!madlib ? (
                <InputForm onSubmit={createMadlib}/>
            ) : (
                <>
                    <MadlibDisplay madlib={madlib}/>
                    <RestartButton onReset={restartMadlib}/>
                </>
            )}
        </div>
    )
}

export default MadlibGen