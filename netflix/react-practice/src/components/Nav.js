import React from "react";

import"bootstrap/dist/css/bootstrap.min.css";

export function Nav() {

    return(

        
        <nav className="container-fluid bg-dark text-white p-3">
            <div className="row">
                <div className="col-3">
                    <h2 className="mb-4">
                        Material Dashboard
                    </h2>
                    <div className="d-flex flex-column gap-3">
                        <a href="/dashboard" className="text-white text-decoration-none">
                            Dashboard
                        </a>
                        <a href="/employee" className="text-white text-decoration-none">
                            Tables
                        </a>
                        
                        <a href="/users" className="text-white text-decoration-none">
                            Billing
                        </a>
                        <a href="/reports" className="text-white text-decoration-none">
                            RTL
                        </a>
                        <a href="/settings" className="text-white text-decoration-none">
                            Notification
                        </a>
                        <a href="/settings" className="text-white text-decoration-none">
                            Profile
                        </a>
                        <a href="/login" className="text-white text-decoration-none">
                            Sign In
                        </a>
                        <a href="/login" className="text-white text-decoration-none">
                            Sign Up
                        </a>
                    </div>                          
                </div>

                <div className="col-9 bg-light text-dark p-4">
                     <h2>Dashboard</h2>
                     <div className="row mt-12">
                        <div className="col-3">
                            <div className="card p-3">
                                <h5>Booking</h5>
                                <h4>281</h4><hr />
                                <span>+55</span>
                                <span>than last week</span>
                            </div>
                        </div>
                     
                        <div className="col-3">
                            <div className="card p-3">
                                <h5>Today's Users</h5>
                                <h4>3200</h4><hr />
                                <span>+3%</span>
                                <span>than last month</span>
                            </div>
                        </div>
                     
                        <div className="col-3">
                            <div className="card p-3">
                                <h5>Revenue</h5>
                                <h4>34k</h4><hr />
                                <span>+1%</span>
                                <span>than yesterday</span>
                            </div>
                        </div>
                     
                        <div className="col-3">
                            <div className="card p-3">
                                <h5>Followers</h5>
                                <h4>+92</h4><hr />
                                <span> Just updated</span>
                            </div>
                        </div>
                     </div> 

                </div>
            </div>
        </nav>


    //     <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", backgroundColor: "#222", color: "white"}}>
    //         <h2>My Dashboard</h2>
    //         <div ></div>

    //         <div style={{display:"flex", gap:"25px"}}>
    //             <a href="/dashboard" style={{color: "white", textDecoration: "none"}}>
    //                 Dashboard
    //             </a>
    //             <a href="/employee" style={{color: "white", textDecoration: "none"}}>
    //                 Employee
    //             </a>
    //             <a href="/users" style={{color: "white", textDecoration: "none"}}>
    //                 Users
    //             </a>
    //             <a href="/reports" style={{color: "white", textDecoration: "none"}}>
    //                 Reports
    //             </a>
    //             <a href="/setting" style={{color: "white", textDecoration: "none"}}>
    //                 Setting
    //             </a>
    //             <a href="/logout" style={{color: "white", textDecoration: "none"}}>
    //                 Logout
    //             </a>
    //         </div>
    //     </nav>
     );

}