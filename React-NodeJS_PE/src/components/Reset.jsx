import React from "react";

const Reset = ({handleReset, status}) => {
    return(
        <div 
            className='reset'
            onClick={handleReset}
        >
        {status ? 'NEW GAME' : 'RESET'}
        </div>
    )
}

export default Reset;