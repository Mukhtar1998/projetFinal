import React from "react"
function Item5(props) {
    return(
        <div className="item">
            <h4>{props.heading2}</h4>
            <a style={{
                textDecoration: props.td,
                background: props.bg,
            }} href="#">{props.p}</a>
            <h4 style={{
                display: props.display
            }}>{props.heading}</h4>

            <p className="view-now">{props.p2}</p>
         </div>
    )
}

export default Item5