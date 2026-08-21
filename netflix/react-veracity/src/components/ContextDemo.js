import React, { useEffect, useState, createContext, useContext } from "react";


var userDetailsContext = React.createContext(null);

export function ContextDemo(){

    const [userDetails] = useState({
        UserName: "Chandr",
        Password: "chandr123"
    })

    return(
        <userDetailsContext.Provider value={userDetails}>
            <div className="container-fluid">
                <h2>Outer Main Container - {userDetails.UserName}</h2>
                <HomeComponent />
            </div>
        </userDetailsContext.Provider>
    )
}

function HomeComponent(){

    const userInfo = useContext(userDetailsContext);
    return(
        <div className="bg-info" style={{height: '180px', pending:'20px'}}>
            <h2>Home - {userInfo.UserName}</h2>
            <NavbarComponent />
        </div>
    )
}

function NavbarComponent(){

    var userData = useContext(userDetailsContext);

    return(
        <div className="btn-toolbar bg-dark justify-content-between">
           <div>
                <button className="btn btn-dark">Shopping</button>
           </div>
           <div className="btn-group">
            <button className="btn btn-dark"></button>
           </div>
        </div>
    )
}