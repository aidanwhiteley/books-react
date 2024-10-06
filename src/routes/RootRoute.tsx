import Header from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import "./routes.css";

export default function Root() {

    const navigation = useNavigation();

    return (
        <>
            <Header />

            <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        
            <Footer />
        </>
    )
}