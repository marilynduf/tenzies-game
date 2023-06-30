import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
    const NumOfDice = 10;
    function createDiceObj() {
        const objArray = [];
        for (let i = 1; i <= NumOfDice; i++) {
            objArray.push({ id: i, value: Math.ceil(Math.random() * 6) + 1 });
        }
        return objArray;
    }

    const diceObj = createDiceObj();

    const [dice, setDice] = useState(diceObj);
    console.log(diceObj);

    // function generateNewDice() {
    //   setDice(dice.map(die => ({...die, value: Math.ceil(Math.random() * 6) + 1})))

    // }
    // generateNewDice()

    return (
        <>
            <h1>TENZIES GAME</h1>
            <Die />
        </>
    );
}

export default App;
