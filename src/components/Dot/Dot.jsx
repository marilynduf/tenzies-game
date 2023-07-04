import "./dot.css";
export default function Dot(props) {
  
    const styles = {
        top: `${props.top}%`,
        left: `${props.left}%`,
        backgroundColor: props.bgColor
    }

    return <div className="dot" style={styles}></div>;
}
