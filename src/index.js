import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sensors from './Components/Sensors'
import ControlBoard from './Components/Controlboard'


class App extends React.Component {
  render(){
    return(
      <div>
        <Sensors/>
        <ControlBoard/>
        <div>
          <img src="http://81.166.35.95:8000/stream.mjpg"></img>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );