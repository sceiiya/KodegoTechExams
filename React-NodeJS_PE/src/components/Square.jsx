import React from "react";

const Square = ({value, toggle, i}) => {
    return(
        <div
            className="square"
            onClick={() => toggle(i)}
        >
            {value}
        </div>
    )
}

export default Square;