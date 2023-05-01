import React from 'react'
import Item5 from './Item5'

function Blog(props) {
    return(
        <div className="blog">
        <div className="text">
         <p>EXPERT INTSRUCTORS</p>
         <h1 className='blogh1'>Latest Articles</h1>
         </div>
        <div className="three-grid-blog">
         <Item5 p="“You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.” -Walt Disney" heading="The Happiest Place On Earth" p2="Aliquam ut justo adipiscing, commodo lectus quis, feugiat ante. Proin accumsan in tellus vel vehicula. Vestibulum non nulla mattis, ultrices lectus at, tincidunt enim." td="none" bg="#9b51e0"  display="block"/>
         <Item5 heading2="Elegant Icon Font" p=" https://www.elegantthemes.com/blog/resources/elegant-icon-font" p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies ut nibh nec cursus. Curabitur porttitor nibh a tellus egestas, sit amet interdum nisl imperdiet. Fusce imperdiet diam odio, ut viverra metus fringilla vel. Nulla aliquam porttitor libero. Cras..." display="block" td="none" bg="rgba(6,147,227,1) 0%" wb="breakAll"/>
         <Item5 heading="The Sweet Life"p2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam justo et nibh venenatis aliquet. Morbi mollis mollis pellentesque. Aenean vitae erat velit."/>
         </div>
         <div className="blogbtn">
         <input className='classesbtn' type="button" value="VIEW ALL" />
         </div>
        </div>

        )
}

export default Blog