import { useState } from "react";
import "./App.css";
import Die from "./components/Die/Die";

function App() {
    function createDiceObj(NumOfDice) {
        const objArray = [];
        for (let i = 1; i <= NumOfDice; i++) {
            objArray.push({ id: i, value: Math.ceil(Math.random() * 6) + 1 });
        }
        return objArray;
    }

    const diceObj = createDiceObj(10);

    const [dice, setDice] = useState(diceObj);

    const mappedDice = dice.map((die) => (
        <Die key={die.id} value={die.value} />
    ));

    return (
        <>
            <h1 className="titre">TENZIES GAME</h1>
            <p className="description">Description du jeu...</p>
            <div className="dice">{mappedDice}</div>
        </>
    );
}

export default App;
