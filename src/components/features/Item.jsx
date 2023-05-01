import React from "react"
function Item (props) {
    return(
        <div className="item">
        <img style={{
            height: props.height,
            maxWidth:props.maxwidth
        }} src={props.imgurl} alt="yoga4" />
        <h4>{props.headingtext}</h4>
        <p>{props.blurb}</p>
        <p className="view-now">{props.cta}</p>
        </div>
    )
}

export default Item