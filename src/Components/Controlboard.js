import React from 'react';
import './Stylesheets/Controlboard.css'
import axios from 'axios';

class ControlBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: "test"
        }
        this.handlClick = this.handlClick.bind(this);
    }

    handlClick(){
        axios.post('http://localhost:8080/api/navigation', {name: 'ola'})
            .then(console.log("post requsert sent"))
    }

    render(){
        return(
            <div>
                <button onClick={this.handlClick}>
                Post!
                </button>
            </div>
        );
    }
}
export default ControlBoard;



