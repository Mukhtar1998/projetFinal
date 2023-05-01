import React from 'react'
import Item from './Item'

function Features (props) {
    return(
        <div className="freatures">
           <div className="freaturestext">
           <p>FEATURES</p>
            <h1 className='freaturesh1'>The Best of Yoga</h1>
            <div className="flex">
            <div className='fitems'>
            <Item imgurl="./f1.png" headingtext="Re-Engergize" blurb="That this group would somehow form a family the way we all became the Brady Bunch."/>
            <Item imgurl="./f2.png" headingtext="Strength Building" blurb="That this group would somehow form a family the way we all became the Brady Bunch." />
            <Item imgurl="./f3.png" headingtext="Stress Relief" blurb="That this group would somehow form a family the way we all became the Brady Bunch."/>
            </div>
            <div className="fimage">
                
            </div>
            <img className='f4' src="./f4.png" alt="f4" maxwidth="100%"  height="auto" />

            <div>
            <Item imgurl="./f5.png" headingtext="Relax & Refresh" blurb="That this group would somehow form a family the way we all became the Brady Bunch."/>
            <Item imgurl="./f6.png" headingtext="Beauty of Body" blurb="That this group would somehow form a family the way we all became the Brady Bunch." />
            <Item imgurl="./f7.png" headingtext="Mind & Soul" blurb="That this group would somehow form a family the way we all became the Brady Bunch."/>
            </div>
            </div>

            </div>
    </div>
     )
}

 
    
export default Features