import React from 'react';
import './Stylesheets/Controlboard.css'
import axios from 'axios';

class ControlBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: "test"
        }
    }

    render(){
        return(
            <div>
                <button onClick={axios.post("http://localhost:8080/api/navigation", {direction: this.state.direction})}>
                Click me!
                </button>
            </div>
        );
    }
}
export default ControlBoard;



