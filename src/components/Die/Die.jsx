import { useState } from "react";
import "./die.css";
import "../Dot/dot.css";

export default function Die(props) {

    const bckColor = props.held ? "bckColor" : ""
    const styles = {
        backgroundColor: props.held ? "thistle" : ""
    }
    const diceFaces = [
        {
            face: 1,
            dot: (
                <>
                    <div className={`dot dot-middle ${bckColor}`}></div>
                </>
            ),
        },
        {
            face: 2,
            dot: (
                <>
                    <div className={`dot dot-top-left ${bckColor}`}></div>
                    <div className={`dot dot-bottom-right ${bckColor}`}></div>
                </>
            ),
        },
        {
            face: 3,
            dot: (
                <>
                    <div className={`dot dot-top-left ${bckColor}`}></div>
                    <div className={`dot dot-middle ${bckColor}`}></div>
                    <div className={`dot dot-bottom-right ${bckColor}`}></div>
                </>
            ),
        },
        {
            face: 4,
            dot: (
                <>
                    <div className={`dot dot-top-left ${bckColor}`}></div>
                    <div className={`dot dot-top-right ${bckColor}`}></div>
                    <div className={`dot dot-bottom-left ${bckColor}`}></div>
                    <div className={`dot dot-bottom-right ${bckColor}`}></div>
                </>
            ),
        },
        {
            face: 5,
            dot: (
                <>
                    <div className={`dot dot-top-left ${bckColor}`}></div>
                    <div className={`dot dot-top-right ${bckColor}`}></div>
                    <div className={`dot dot-bottom-left ${bckColor}`}></div>
                    <div className={`dot dot-bottom-right ${bckColor}`}></div>
                    <div className={`dot dot-middle ${bckColor}`}></div>
                </>
            ),
        },
        {
            face: 6,
            dot: (
                <>
                    <div className={`dot dot-top-left ${bckColor}`}></div>
                    <div className={`dot dot-top-middle ${bckColor}`}></div>
                    <div className={`dot dot-top-right ${bckColor}`}></div>
                    <div className={`dot dot-bottom-left ${bckColor}`}></div>
                    <div className={`dot dot-bottom-middle ${bckColor}`}></div>
                    <div className={`dot dot-bottom-right ${bckColor}`}></div>
                </>
            ),
        },
    ];

   

    function getDieFace() {
        for (const die of diceFaces) {
            if (die.face === props.value) {
                return die.dot;
            }
        }
    }

    const toDisplay = getDieFace();

    return (
        <div style={styles} onClick={() => props.handleClick(props.id)} className="die">
            <div className="dot-disposition">{toDisplay}</div>
        </div>
    );
}
