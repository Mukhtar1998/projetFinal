import React from "react";

function UserProfilFront  ()  {
  const details = localStorage.getItem("user")
  const getDetails = JSON.parse(details)

  const name = getDetails.name;
  const lastName = getDetails.lastName
  const id = getDetails._id
  const email = getDetails.email
  console.log('====================================');
  console.log("lastName",lastName);
  console.log('====================================');

  console.log('====================================');
  console.log("email",email);
  console.log('====================================');
  console.log('====================================');
  console.log("id",id);
  console.log('====================================');

    console.log('====================================');
    console.log(name);
    console.log('====================================');

    console.log('====================================');
    console.log("getDetails",getDetails);
    console.log('====================================');
  return(

    <div>{<p>Hi,<strong>{lastName}</strong> Welcome to your profile</p>}
     
    </div>
  ) 

};
  
export default UserProfilFront;
  