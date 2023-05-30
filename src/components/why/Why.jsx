import React from 'react'

function Why(props) {
    return(
        <div className="why">
            <div className="whytext">
                <p>WHY CHOOSE US</p>
                <h1 className='whyh1'>Customized Instruction For Every Student</h1>
                <p className='whyp'>As you explore our website, you will also find articles and blog posts on topics such as the philosophy of yoga, the benefits of specific poses, and tips for integrating yoga into your daily life. Our goal is to create a supportive community where you can connect with like-minded individuals, share your experiences, and inspire each other on this transformative journey.</p>
                <div>
                <input className='btn1' type="button" value="JOIN US NOW" />
                </div>
            </div>
            <img className='whyimage' src="./yoga-06.png" alt="yoga6" />
        </div>
    )
}

export default Why