import "./die.css";
import "../Dot/dot.css";

export default function Die(props) {
    const diceFaces = [
        {
            face: 1,
            dot: (
                <>
                    <div className="dot dot-middle"></div>
                </>
            ),
        },
        {
            face: 2,
            dot: (
                <>
                    <div className="dot dot-top-left"></div>
                    <div className="dot dot-bottom-right"></div>
                </>
            ),
        },
        {
            face: 3,
            dot: (
                <>
                    <div className="dot dot-top-left"></div>
                    <div className="dot dot-middle"></div>
                    <div className="dot dot-bottom-right"></div>
                </>
            ),
        },
        {
            face: 4,
            dot: (
                <>
                    <div className="dot dot-top-left"></div>
                    <div className="dot dot-top-right"></div>
                    <div className="dot dot-bottom-left"></div>
                    <div className="dot dot-bottom-right"></div>
                </>
            ),
        },
        {
            face: 5,
            dot: (
                <>
                    <div className="dot dot-top-left"></div>
                    <div className="dot dot-top-right"></div>
                    <div className="dot dot-bottom-left"></div>
                    <div className="dot dot-bottom-right"></div>
                    <div className="dot dot-middle"></div>
                </>
            ),
        },
        {
            face: 6,
            dot: (
                <>
                    <div className="dot dot-top-left"></div>
                    <div className="dot dot-top-middle"></div>
                    <div className="dot dot-top-right"></div>
                    <div className="dot dot-bottom-left"></div>
                    <div className="dot dot-bottom-middle"></div>
                    <div className="dot dot-bottom-right"></div>
                </>
            ),
        },
    ];

    function getDieFace() {
        for (const die of diceFaces) {
            console.log(
                "id: " +
                    props.id +
                    ": face: " +
                    die.face +
                    ", props: " +
                    props.value
            );

            if (die.face === props.value) {
                return die.dot;
            }
        }
    }

    const tiDisplay = getDieFace();

    return (
        <div className="die">
            <div className="dot-disposition">{tiDisplay}</div>
        </div>
    );
}
