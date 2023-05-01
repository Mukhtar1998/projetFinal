import React from 'react'
import Item4 from './Item4'
function Testimonials() {
    return(
        <div className="testimonials">
        <div className="text">
           <p>TESTIMONIALS</p>
           <h1 className='testimonialsh1'>What People Are Saying</h1>
        </div>
        <div className="three-grid-testionials">
           <Item4 blurb="“Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”" heading="Antonio Compbell" cta="Studio Manager, Yoga Studio" bg="#fff"/>
           <Item4 blurb="“Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”" heading="Helena Smith" cta="Studio Manager, Yoga Studio" bg="#fff"/>
           <Item4 blurb="“Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”." heading="Isabella Edwards Compbell" cta="Studio Manager, Yoga Studio" bg="#fff"/>
        </div>
        <div className="testimonialsbtn">
        <input className='classesbtn ' type="button" value="VIEW ALL" />
        </div>
        </div>
    )
}

export default Testimonials