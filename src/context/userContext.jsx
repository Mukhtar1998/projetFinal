import React from 'react'

export const IsLoggedIn = React.createContext(localStorage.getItem("user") && localStorage.getItem("user") !== undefined && localStorage.getItem("user") !== 'undefined'? true : false);

