export function NetflixHeaderComponents(){
    return(
        <div>
            <div className="d-flex justify-content-around">
                <h1 className="netflix">NETFLIX</h1>
                <div className="form-op-but d-flex align-items-center gap-2">
                    <select className="form-select bg-dark text-white">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                    <button className="btn btn-danger px-4">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );

}