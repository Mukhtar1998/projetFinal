import React from 'react'
import { Link } from 'react-router-dom'

function Footer(props) {
    return(
        <div className="footer">
           <div className="parents">
           <div className="footertext">
           <h1>Ready to Make a Change?</h1>
            <p>Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc. Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc.</p>
           </div>
           <div className="footerbtn">
           <Link to="/login">
           <input className='btn1 classesbtn' type="button" value="BECOME A MEMBER" />
           </Link>
            <input className='btn2 classesbtn' type="button" value="TAKE A CLASS" />
           </div>
            </div>
        </div>
    )
}


export default Footer