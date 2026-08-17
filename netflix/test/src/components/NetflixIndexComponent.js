import { DataBindingComponent } from "./DataBindingComponent";
import { MoreResonToJoin } from "./MoreResonToJoin";
import { NetflixHeaderComponents } from "./NetflixHeaderComponent";
import { NetflixMainComponent } from "./NetflixMainComponent";
import { NetflixRegisterComponent } from "./NetflixRegisterComponent";
import { TrandingNowComponents } from "./TrendingNowComponents";

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
                        <TrandingNowComponents />
                        <MoreResonToJoin />

                    </main>
                    
                </section>
            </div>
        </div>
    );
}