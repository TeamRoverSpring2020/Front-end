import React from 'react';
import './Stylesheets/Controlboard.css'
import axios from 'axios';

class ControlBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(control){
        this.setState({direction: control});
        axios.post('http://localhost:8080/api/navigation', this.state.direction)
            .then(console.log("post request sent"))
    }

    render(){
        return(
            <div>
              <div className="sensor-heading"><h2>Controlboard</h2></div>
              <div className="sensor-panel">
                <button onClick={() => this.handleClick("left")} className="sensor">
                  Left
                </button>
                <button onClick={() => this.handleClick("right")} className="sensor">
                  Right
                </button>
                <button onClick={() => this.handleClick("drive")} className="sensor">
                  Drive
                </button>
                <button onClick={() => this.handleClick("reverse")} className="sensor">
                  Reverse
                </button>
                <button onClick={() => this.handleClick("stop")} className="stop">
                  STOP
                </button>
              </div>
            </div>
          );
    }
}
export default ControlBoard;



