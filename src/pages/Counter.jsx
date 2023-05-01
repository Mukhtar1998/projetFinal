import React from "react"
import { useState } from 'react'

function Counter(){
    const [counterone, setCounterone] = useState(0)
    const [ countertwo, setCountertwo] = useState(5) 
    return (
        <div className="counter">
            <div>{counterone}</div>
            <button onClick={() => {setCounterone(counterone + 10)}}>+</button>
            <button onClick={() => {setCounterone(counterone - 10)}}>-</button>
            <div className="counter">{countertwo}</div>
            <button onClick={() => {setCountertwo (countertwo + 5)}}>+5</button>
        </div>
    )
}

export default Counter

// create a component
// import useState from 'react'

// create your STATE VARIABLE <--- countertwo
// CREATE AN EVENT LISTENER which CHANGES YOUR STATE VARIABLE <--one button which INCREASES the AMOUNT OF COUNTERTWO BY 5 EACH TIME YOU PRESS