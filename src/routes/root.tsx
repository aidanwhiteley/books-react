import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {

    return (
        <>
            <Header />

            <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div id="detail">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        
            <Footer />
        </>
    )
}