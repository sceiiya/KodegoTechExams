import React from "react";

const Indicator = ({status, winner, message}) =>{
    return(
        <div className='turn-indicator-cont'>
            <div className={status ? 'turn-indicator' : 'hidden'}>
                WINNER: {winner}
            </div>
            <div className={!status ? 'turn-indicator' : 'hidden'}>
                {message}
            </div>
        </div>
    )
}

export default Indicator;