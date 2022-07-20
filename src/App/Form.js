import React from "react"

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name:"",
            date:"",
            time:"",
            number:""
        }
    }
    render() {
        return (
        <div className='resy-form'>
          <form>
            <input tyoe="text" placeholder="name"  name="name" value = {this.state.name} />
            <input tyoe="text" placeholder="Date (mm/dd)"  name="date" value = {this.state.data} />
            <input tyoe="text" placeholder="Time"  name="time" value = {this.state.time} />
            <input tyoe="text" placeholder="Number of Guests"  name="number" value = {this.state.number} />
            <button>Make a reservation</button>
          </form>
        </div>
        )
    }
}

export default Form