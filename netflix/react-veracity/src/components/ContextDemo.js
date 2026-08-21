import { useEffect, useState, createContext } from "react";

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
            </div>
        </userDetailsContext.Provider>
    )
}

function HomeComponent(){
    return(
        <div className="bg-info" style={{height: '180px', pending:'20px'}}>
            <h2>Home</h2>
        </div>
    )
}

function NavbarComponent(){
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