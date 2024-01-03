import React from "react";

function addCommas(num) {
    if (!num) return "Undefined"
    else {
        let numString = num.toString()
        numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return (
            <div>
                <h1>{num}</h1>
                <h1>{`"${numString}"`}</h1>
            </div>
        )
    }
}

export default addCommas