import { useState } from "react";
import "./App.css";
import Die from "./components/Die/Die";

function App() {
    function ramdomNumbers() {
        return Math.ceil(Math.random() * 6);
    }

    function createDiceObj(numberOfDice) {
        const objArray = [];
        for (let i = 0; i < numberOfDice; i++) {
            objArray.push({ id: i, value: ramdomNumbers(), isHeld: false });
        }

        return objArray;
    }

    const [dice, setDice] = useState(createDiceObj(10));

    function createAllNewDice() {
        setDice((oldDice) =>
            oldDice.map((die) => ({
                ...die,
                value: ramdomNumbers(),
            }))
        );
    }

    function heldDie(id) {
        setDice(
            dice.map((die) =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    }

    const mappedDice = dice.map((die) => (
        <Die handleClick={heldDie} key={die.id} id={die.id} value={die.value} held={die.isHeld}/>
    ));

    return (
        <>
            <h1 className="title">TENZIES GAME</h1>
            <p className="description">
                But du jeu: rouler les dés le plus vite possible, le premier
                joueur qui reçoit tous les dés du même nombre gagne la partie
            </p>
            <div className="dice">{mappedDice}</div>
            <button onClick={createAllNewDice} className="btn-roll-dice">
                Roll!
            </button>
        </>
    );
}

export default App;
