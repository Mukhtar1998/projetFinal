import React from 'react'
function About(props){
    return(
        <div className="about">
            <div className="abouttext">
            <p>ABOUT US</p>
            <h1 className='abouth1'>High Quality &<br />Professional Yoga Club</h1>
            <p className='aboutp'>Perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.</p>
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