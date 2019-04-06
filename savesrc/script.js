"use strict";

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            letter: "Drum machine",
            sound: "/sounds/s.ogg"
        };
        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }
    handleChange(a) {
        let keypads = ["drum-pad Q","drum-pad W","drum-pad E","drum-pad A","drum-pad S","drum-pad D","drum-pad Z","drum-pad X","drum-pad C"];
        if (keypads.includes(a.target.className)) {
            this.setState({
                letter: a.target.id,  
                sound: "/sounds/" + a.target.textContent +".ogg"
            });
            document.getElementById("drums").src = this.state.sound;
            document.getElementById("drums").play();
        }
    }
    keyPress(key) {
        let b = key.keyCode;
        if (b == 81 || b == 87|| b == 69|| b == 65|| b == 83|| b == 68|| b == 90|| b == 88|| b == 67) {
            this.setState({
                letter: document.getElementsByClassName("drum-pad " + String.fromCharCode(b))[0].id,  
                sound: "/sounds/" + String.fromCharCode(b) +".ogg"
            });
            document.getElementById("drums").src = this.state.sound;
            document.getElementById("drums").play();   
        }
    }
    render() {
        document.body.style = "background: lightcyan";
        window.addEventListener("keydown",this.keyPress,false);
        document.addEventListener("click",this.handleChange);
        return (
            <div id="drum-machine" className="drum_machine">
                <div id="display" className="display">
                    {this.state.letter}
                </div>
                <div className="drum-pad Q" id="Drum 1">Q</div>
                <div className="drum-pad W" id="Snare">W</div>
                <div className="drum-pad E" id="Bass">E</div>
                <div className="drum-pad A" id="Chyme 1">A</div>
                <div className="drum-pad S" id="Chyme 2">S</div>
                <div className="drum-pad D" id="Chyme 3">D</div>
                <div className="drum-pad Z" id="Drum 2">Z</div>
                <div className="drum-pad X" id="Drum 3">X</div>
                <div className="drum-pad C" id="Chime">C</div>
                <audio className="clip" id="drums" src={this.state.sound}></audio>
            </div>
        );
    }
}
const domContainer = document.querySelector("#container");
ReactDOM.render(React.createElement(DrumMachine), domContainer);