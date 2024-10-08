import Header from "../components/Header/Header2";
import Footer from "../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import "./routes.css";
import  { useEffect, useState, useMemo } from 'react';
import { getuserProfile } from "../apis/HttpDataApis";

// For testing only
import data from "./testuser.json";

export default function Root() {

    const navigation = useNavigation();
    
    const [userProfile, setUserProfile] = useState({});
    const [loggedOn, setLoggedOn] = useState(false);

    // Define a memoized function for fetching the user's profile data (or not!)
    const fetchUserProfile = useMemo(() => async () => {
       //const profile = getuserProfile();
       const profile = data;
       console.log('User profile: ' + JSON.stringify(profile));
    }, [loggedOn]);

    // Fetch the user's profile on component mount
    useEffect(() => {
        fetchUserProfile();
    }, [fetchUserProfile]);

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