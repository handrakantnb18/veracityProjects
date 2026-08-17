import { DataBindingComponent } from "./DataBindingComponent";
import { NetflixHeaderComponents } from "./NetflixHeaderComponent";
import { NetflixMainComponent } from "./NetflixMainComponent";
import { NetflixRegisterComponent } from "./NetflixRegisterComponent";

export default function NetflixIndexComponent(){
    return(
        <div className="container-fluid">
            <div className="box">
                <header>
                    <NetflixHeaderComponents />
                </header>
                <section className="d-flex justify-content-center align-item-center">
                    <main>
                        <NetflixMainComponent />
                        <NetflixRegisterComponent />
                         <DataBindingComponent />
                    </main>
                    
                </section>
            </div>
        </div>
    );
}