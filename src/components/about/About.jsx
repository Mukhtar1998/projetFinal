import React from 'react'
function About(){
    return(
        <div className="about">
            <div className="abouttext">
            <p>ABOUT US</p>
            <h1 className='abouth1'>High Quality &<br />Professional Yoga Club</h1>
            <p className='aboutp'>Yoga has been practiced for thousands of years and has gained immense popularity worldwide due to its transformative effects on the mind, body, and spirit. It provides a sanctuary from our fast-paced lives, allowing us to find inner peace, improve flexibility, build strength, and cultivate a deeper connection with ourselves..</p>
            <div className="profil">
            <img className='profilimg' src="./profil.png" alt="profil" />
            <p className='profiltext'>“Nunc consequat justo eget enim finibus porta. Suspendisse orci nunc, rutrum quis nunc sed, feugiat hendrerit massa. In cursus ornare sollicitudin.”</p>
            </div>
            <h4 className='profilname'>AnthonyWebster, CEO Yoga studio</h4>
            </div>
            <img className='aboutimage' src="./yoga2.png" alt="yoga2" />

        </div>
    )
}

export default About