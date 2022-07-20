import React from "react"
import "./Resy.css"
const Resy = ({id, name, date, time, number, deleteResy}) => {
    return (
        <div className="resy">
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{time}</p>
            <p>{number}</p>
            <button onClick = {()=>deleteResy(id)}>cancel</button>
        </div>
    )
}

export default Resy