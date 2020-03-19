import React from 'react';
import axios from 'axios';
import './Stylesheets/Sensors.css'


class Sensors extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sensorData : {
          id: 0,
          temperature: 0,
          humidity: 0,
          pressure: 0
        }
      }
      this.changeState = this.changeState.bind(this);
    }
  
    changeState(){
      const data = axios.get("http://localhost:8080/api/sensor-data/current")
      data.then(respons => this.setState({sensorData: respons.data}))
    }
  
    componentDidMount(){
      this.changeState();
    }

    render() {
      return(
        <div>
          <div className="sensor-heading"><h2>Sensors</h2></div>
          <div className="sensor-panel">
            <div className="sensor">
              Temp: {this.state.sensorData.temperature}
            </div>
            <div className="sensor">
              Humidity: {this.state.sensorData.humidity}
            </div>
            <div className="sensor">
              Pressure: {this.state.sensorData.pressure}
            </div>
          </div>
          <div className="button">
            <button onClick={this.changeState}>Send request</button>
          </div> 
        </div>
      );
    }
  }

export default Sensors;
