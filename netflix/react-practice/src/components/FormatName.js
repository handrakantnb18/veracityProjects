import React from "react";

export function FormatName(user) {
    return user.firstName + ' '+ user.lastName;    
}

const user = {
    firstName : 'Chandrakant',
    lastName : 'Bhosale'
};

document.getElementById("message").innerHTML =
            "Hello, " + FormatName(user) + "!";
            
// const element = (
//         <div>
//             <h1>
//                 Hello, {FormatName(user)}!
//             </h1>
//         </div>
//     );
