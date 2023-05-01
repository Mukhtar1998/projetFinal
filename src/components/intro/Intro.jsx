import React from 'react'

function Intro() {
    return(
       <div className="intro">
           <div className="introparents">
           <div className="introtext">
            <h1 className='introh1'>Divi Yoga Studio <br /><strong>Balance, Mind & <br /> Body</strong></h1>
            <p className='introp'>Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed.</p>
           <div className="intobtn">
           <input className='introb' type="button" value="GET STARTED" />
           </div>
           </div>
           <img className='introimage' src="./yoga1.png" alt="yoga1"/>

         
        </div>
       </div>
    )
}

export default Intro