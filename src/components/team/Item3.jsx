import React from "react"

function Item3(props) {
    return (
        <div className="item">
            <img className="team-img" src={props.imgurl} alt="yoga4" style={{
            }} />
            <h4>{props.heading}</h4>
            <p>{props.blurb}</p>
            <p className="view-now">{props.cta}</p>
         </div>
    )
}

export default Item3