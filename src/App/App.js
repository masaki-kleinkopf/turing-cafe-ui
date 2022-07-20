import React, { Component } from 'react';
import './App.css';
import Form from "./Form.js"
import ResyContainer from "./ResyContainer.js"

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations:[]
    }
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/v1/reservations")
    .then(response => response.json())
    .then(data => this.setState({reservations:data}))
    //add error handling
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <ResyContainer reservations={this.state.reservations} />
      </div>
    )
  }
}

export default App;
