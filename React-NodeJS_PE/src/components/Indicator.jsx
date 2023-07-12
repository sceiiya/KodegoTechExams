import React from "react";

const Indicator = ({status, winner, message, draw}) =>{
    return(
        <div className='turn-indicator-cont'>
            <div className={status ? 'turn-indicator' : 'hidden'}>
                { draw ? 'DRAW! START A NEW GAME' : 'WINNER: '}{winner}
            </div>
            <div className={!status ? 'turn-indicator' : 'hidden'}>
                {message}
            </div>
        </div>
    )
}

export default Indicator;