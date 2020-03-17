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
      </div>
    )
  }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );