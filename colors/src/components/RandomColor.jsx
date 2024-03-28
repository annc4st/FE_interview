import "../App.css";

const RandomColor = ({colors, onRandomColor}) => {
    const handleRandomColor = () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        onRandomColor(randomColor);
    };
  
    return (
        <div className="random-div">
            <button className="btn-rnd" onClick={handleRandomColor}>Random Color</button>
        </div>
    );
}

export default RandomColor;