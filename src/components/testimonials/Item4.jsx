import React from "react"
function Item4(props) {
    return (
        <div className="item" style={{
            background: props.bg
        }}>
            <h4>{props.heading}</h4>
            <p>{props.blurb}</p>
            <p className="view-now">{props.cta}</p>
         </div>
    )
}

export default Item4