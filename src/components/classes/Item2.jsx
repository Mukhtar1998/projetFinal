import React from "react"
function Item2(props) {
    return (
        <div className="item">
            <img src={props.imgurl} alt="yoga4" />
            <h4>{props.heading}</h4>
            <p>{props.blurb}</p>
            <p className="view-now">{props.cta}</p>
         </div>
    )
}

export default Item2