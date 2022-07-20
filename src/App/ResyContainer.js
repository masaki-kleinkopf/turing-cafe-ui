import React from "react"
import Resy from "./Resy"
import "./ResyContainer.css"

const ResyContainer = ({reservations}) => {
    const reservationComponents = reservations.map(resy => {
        return <Resy id={resy.id} key={resy.id} name={resy.name} date={resy.date} time={resy.time} number={resy.number}/>
    })
    
    return(
        <div className='resy-container'>
          {reservationComponents}
        </div>
    )
}

export default ResyContainer