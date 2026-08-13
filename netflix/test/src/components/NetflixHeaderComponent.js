export function NetflixHeaderComponents(){
    return(
        <div>
            <div className="d-flex justify-content-between">
                <h1>NETFLIX</h1>
                <div>
                    <select className="form-select">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className="btn btn-danger">Sign In</button>
                </div>
            </div>
        </div>
    );

}