import React, { Component } from 'react';
import './App.css';
import Runner from './Runner/Runner';

class App extends Component {
  state = {
    runners: [
      { name: 'Gizmo', age: 9, grade: 12, pr: '16:52' },
      { name: 'Giacomo', age: 9, grade: 12, pr: '17:11' },
      { name: 'Harrison', age: 1, grade: 10, pr: '19:44' },
    ]
  }

  render() {

    let runners = (
      <div>
        {this.state.runners.map(runner => {
          return <Runner
            name={runner.name}
            age={runner.age}
            grade={runner.grade}
            pr={runner.pr} />
        })}
      </div>
    );

    return (
      <div className="App">
        {runners}
      </div>
    );
  }
}

export default App;
