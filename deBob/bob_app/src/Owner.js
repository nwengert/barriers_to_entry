import React from 'react'

function Owner (props) {
    return (
        <div>
            <h1>Owner:              {props.owner}</h1>
            <h2>Phone Number:       {props.phone}</h2>
            <h2>Share Type:         {props.shareType}</h2>
            <h2>Number of Shares:   {props.shares}</h2>
            <h2>Amount Used:        {props.used * 100}%</h2>
            <h2>Amount Remaining:   {props.remaining * 100}%</h2>
        </div>
    )
}

export default Owner