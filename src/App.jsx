import { useState } from "react";
import "./App.css";
import Die from "./components/Die/Die";

function App() {
    function createDiceObj(NumOfDice) {
        const objArray = [];
        for (let i = 0; i < NumOfDice; i++) {
            objArray.push({ id: i, value: Math.ceil(Math.random() * 6)});
        }
      
        return objArray;
    }

    const diceObj = createDiceObj(10);

    const [dice, setDice] = useState(diceObj);

    const mappedDice = dice.map((die) => (
        <Die key={die.id} id={die.id} value={die.value} />
    ));

    console.log(mappedDice)

    return (
        <>
            <h1 className="titre">TENZIES GAME</h1>
            <p className="description">But du jeu: rouler les dés le plus vite possible, le premier joueur qui reçoit tous les dés du même nombre gagne la partie</p>
            <div className="dice">{mappedDice}</div>
        </>
    );
}

export default App;
