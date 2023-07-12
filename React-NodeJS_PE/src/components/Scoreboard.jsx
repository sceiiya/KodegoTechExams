import React from "react";

const Scoreboard = ({X, O}) => {
    return(
        <div 
            className='scoreboard'
        >
            SCOREBOARD
            <div> X = {X == null ? 0 : X} </div>
            <div> O = {O == null ? 0 : O} </div>
        </div>
    )
}

export default Scoreboard;