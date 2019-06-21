import React from "react"

function Ticker(props){
    return(
        <div>
       Current BTC price: <span id="btc">{props.name}</span>
        </div>
    )
}

export default Ticker