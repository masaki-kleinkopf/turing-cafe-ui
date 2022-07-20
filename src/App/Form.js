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

    handleClick = (event) => {
        event.preventDefault()
        const { name, date, time, number} = this.state;
        const newResy = {id:Date.now(),name:name, date:date, time:time, number:parseInt(number)}
        this.props.addResy(newResy)
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
        <div className='resy-form'>
          <form>
            <input tyoe="text" placeholder="name"  name="name" value = {this.state.name} onChange={this.handleChange} />
            <input tyoe="text" placeholder="Date (mm/dd)"  name="date" value = {this.state.data} onChange={this.handleChange} />
            <input tyoe="text" placeholder="Time"  name="time" value = {this.state.time} onChange={this.handleChange} />
            <input tyoe="text" placeholder="Number of Guests"  name="number" value = {this.state.number} onChange={this.handleChange} />
            <button name="submit" onClick = {this.handleClick}>Make a reservation</button>
          </form>
        </div>
        )
    }
}

export default Form