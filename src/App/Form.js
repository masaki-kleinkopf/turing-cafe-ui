import React from "react"
import "./Form.css"

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
        if (name && date && time && number){
            this.props.addResy(newResy)
        }
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        const { name, date, time, number} = this.state;
        const conditions = (name && date && time && number)
        return (
        <div className='resy-form'>
          <form>
            {/* needs error handling */}
            <input type="text" placeholder="name"  name="name" value = {this.state.name} onChange={this.handleChange} />
            <input type="text" placeholder="Date (mm/dd)"  name="date" value = {this.state.data} onChange={this.handleChange} />
            <input type="text" placeholder="Time"  name="time" value = {this.state.time} onChange={this.handleChange} />
            <input type="text" placeholder="Number of Guests"  name="number" value = {this.state.number} onChange={this.handleChange} />
            <button name="submit" onClick = {this.handleClick}>Make a reservation</button>
            {!conditions && <p className = "form-message">fill all forms to make a reservation</p>}
          </form>
        </div>
        )
    }
}

export default Form