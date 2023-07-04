import { useState, useEffect } from "react";
import "./App.css";
import Die from "./components/Die/Die";

function App() {
    function ramdomNumbers() {
        return Math.ceil(Math.random() * 6);
    }

    // Création de l'objet contenant les dés
    // propriétés: id, value, isHeld
    function createDiceObj(numberOfDice) {
        const objArray = [];
        for (let i = 0; i < numberOfDice; i++) {
            objArray.push({ id: i, value: ramdomNumbers(), isHeld: false });
        }
        return objArray;
    }

    // States
    const [diceValues, setDiceValues] = useState(createDiceObj(10));
    const [tenzies, setTenzies] = useState(false);

    const buttonStyle = {
        backgroundColor: tenzies ? "#9bff9b" : "#cc5064",
    };

    // Générer de nouvelle valeur pour les dés
    function generateNewDice() {
        if (tenzies) {
            setDiceValues((oldDice) =>
                oldDice.map((die) => ({
                    ...die,
                    value: ramdomNumbers(),
                    isHeld: false,
                }))
            );
            setTenzies(false);
        }
        setDiceValues((oldDice) =>
            oldDice.map((die) =>
                die.isHeld ? die : { ...die, value: ramdomNumbers() }
            )
        );
    }

    useEffect(() => {
        const allDiceHeld = diceValues.every((die) => die.isHeld);
        const allDiceSameValue = diceValues.every(
            (die) => diceValues[0].value === die.value
        );

        if (allDiceHeld && allDiceSameValue) {
            setTenzies(true);
        }
    }, [diceValues]);

    // Sélectionner les dés qui ne doivent pas être relancer
    function heldDie(id) {
        setDiceValues(
            diceValues.map((die) =>
                die.id === id ? { ...die, isHeld: !die.isHeld } : die
            )
        );
    }

    const mappedDice = diceValues.map((die) => (
        <Die
            key={die.id}
            id={die.id}
            value={die.value}
            held={die.isHeld}
            handleClick={heldDie}
        />
    ));

    return (
        <>
            <h1 className="title">TENZIES GAME</h1>
            <p className="description">
                But du jeu: rouler les dés le plus vite possible, le premier
                joueur qui reçoit tous les dés du même nombre gagne la partie
            </p>
            <div className="dice">{mappedDice}</div>
            <button
                onClick={generateNewDice}
                className="btn-roll-dice"
                style={buttonStyle}
            >
                {tenzies ? "Nouveau jeu" : "Lancez les dés!"}
            </button>
        </>
    );
}

export default App;
