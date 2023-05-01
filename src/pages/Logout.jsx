import React from 'react';
import { googleLogout } from "@react-oauth/google";

const clientId = "635254728250-00jrk2d1e3as3bqs1cjg2nejc8df0gg1.apps.googleusercontent.com";
function Logout() {
    
    const onSuccess = (res) => {
		console.log(`LOG OUT SUCCESSFULLY!`);
	};

    return (
        <div className='logout-parents' id="signOutButton">
            <h3>
                LogOut
            </h3>
            <googleLogout 
            clientId={clientId}
            buttonText={"Logout"}
            onlogoutSuccess={onSuccess}/>
        </div>
    );
  
};
export default Logout;