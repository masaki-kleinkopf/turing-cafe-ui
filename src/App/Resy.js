import React from "react"
import "./Resy.css"
const Resy = ({id, name, date, time, number}) => {
    return (
        <div className="resy">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
            <button>cancel</button>
        </div>
    )
}

export default Resy