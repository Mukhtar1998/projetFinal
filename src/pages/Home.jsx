import React from 'react'
import About from ".././components/about/About";
import Classes from ".././components/classes/Classes";
import Intro from ".././components/intro/Intro";
import Why from ".././components/why/Why";
import Features from ".././components/features/Features";
import Team from ".././components/team/Team";
import Testimonials from ".././components/testimonials/Testimonials";
import Blog from ".././components/blog/Blog";
import Partners from ".././components/partners/Partners";
import Footer from ".././components/footer/Footer";


function Home() {
    return (
        <div>
            <Intro />
            <About />
            <Classes />
            <Why/>
            <Features/>
            <Team/>
            <Testimonials/>
            <Blog/>
            <Partners/>
            <Footer/>
        </div>
    )
}
export default Home