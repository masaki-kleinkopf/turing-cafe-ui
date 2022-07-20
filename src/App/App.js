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

  addResy = (resy) => {
    fetch("http://localhost:3001/api/v1/reservations", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(resy)
    })
    .then(response => response.json())
    .then(data => this.setState({reservations: [...this.state.reservations, resy]}))
  }

  deleteResy = (id) => {
    fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(() => {
      let filteredResy = this.state.reservations.filter(resy => {
        return resy.id !== id
      })
      this.setState({reservations:filteredResy})
    }
    )
  }
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addResy={this.addResy}/>
        {this.state.reservations.length > 0 ? <ResyContainer deleteResy={this.deleteResy} reservations={this.state.reservations} /> : 
        <p>oops something went wrong</p>}
      </div>
    )
  }
}

export default App;
