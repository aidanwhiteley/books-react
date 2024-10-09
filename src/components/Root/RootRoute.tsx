import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import "./RootRoute.css";
import { useEffect, useState, useMemo } from 'react';
import { getuserProfile, UserProfile } from "../../apis/HttpDataApis";
import { profileContext } from "../../utils/ProfileContext";

// For testing only
import data from "./testuser.json";

export default function Root() {

    const navigation = useNavigation();

    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loggedOn, setLoggedOn] = useState(false);

    // Define a memoized function for fetching the user's profile data (or not!)
    const fetchUserProfile = useMemo(() => async () => {
        const profile = await getuserProfile();
        //const profile = data;
        setUserProfile(profile);
        console.log('User profile: ' + JSON.stringify(profile));
    }, [loggedOn]);

    // Fetch the user's profile on component mount
    useEffect(() => {
        fetchUserProfile();
    }, [fetchUserProfile]);

    return (

        <>
            <profileContext.Provider value={userProfile}>

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
                
            </profileContext.Provider>
        </>
    )
}