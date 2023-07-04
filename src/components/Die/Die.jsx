import { useState } from "react";
import { nanoid } from "nanoid";
import "./die.css";
import "../Dot/dot.css";
import Dot from "../Dot/Dot";

export default function Die(props) {

    const bgDie = {
        backgroundColor: props.held ?  "thistle" : "#242424"
    }

    const bgDot =  props.held ? "#242424" : "thistle" 

    const dotArray = [];
    function createDice(num) {
        const dotMatrix = {
            1: [[50, 50]],

            2: [
                [20, 20],
                [80, 80],
            ],
            3: [
                [20, 20],
                [50, 50],
                [80, 80],
            ],
            4: [
                [20, 20],
                [20, 80],
                [80, 20],
                [80, 80],
            ],
            5: [
                [20, 20],
                [20, 80],
                [50, 50],
                [80, 20],
                [80, 80],
            ],
            6: [
                [20, 20],
                [20, 50],
                [20, 80],
                [80, 20],
                [80, 50],
                [80, 80],
            ],
        };

        for (const face of dotMatrix[num]) {
            dotArray.push(
                <Dot
                    key={nanoid()}
                    top={face[0]}
                    left={face[1]}
                    bgColor={bgDot}
                />
            );
        }
    }

    createDice(props.value);

    return (
        <div onClick={() => props.handleClick(props.id)} className="die" style={bgDie}>
            <div className="dot-container" >{dotArray}</div>
        </div>
    );
}
