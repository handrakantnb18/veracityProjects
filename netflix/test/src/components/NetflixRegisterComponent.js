export function NetflixRegisterComponent(){
    return(
        <div className="d-flex justify-content-center mt-4">
            <div className="text-center bg-drak text-white p-5 w-100">
                <p>Ready to watch? Enter your email to start your membership.</p>
                <div>
                    <div className="input-group input-group-lg d-flex align-items-center gap-2">
                        <input type="email" className="from-control" placeholder="Email Address" />
                <button className="btn btn-danger ms-2 ">
                    Try 30 Days for &#8377; 0 &nbsp; &nbsp;
                    <span className="bi bi-chevron-right"></span>
                </button>
                    </div>
                </div>
            </div>


        </div>
    );
}