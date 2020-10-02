import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circles from './components/Circles/Circles';

class App extends Component {
  constructor() {
    super()
    this.state={
      selected: 'circle'
    }
  }

  btnClick = (circle) => {
    this.setState({
      selected: circle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">RAHUL'S UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            selected={this.state.selected}
            btnClick={this.btnClick}
          />
          <Circles 
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;