import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Messaging from "../Messaging/Messaging";
import { Outlet, useNavigation, useOutletContext } from "react-router-dom";
import "./RootRoute.css";
import { useEffect, useState, useMemo } from 'react';
import { getuserProfile, UserProfile } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction} from "react-router-typesafe";

// For testing only
// import data from "./testuser.json";

type ContextType = { userProfile: UserProfile | null };

export const loader = (async () => {
    return await getuserProfile();
}) satisfies LoaderFunction;

export default function Root() {

    const navigation = useNavigation();
    const userProfile = useLoaderData<typeof loader>();
    const message = userProfile ? 'Hi ' + userProfile.firstName + ', here are a few of the recently reviewed books on the Cloudy Book Club that ' +
        ' got the much coveted \'Great\' rating' : '';

    return (

        <>
            <Header userprofile={userProfile} />

            {userProfile && 
                <Messaging message={message} />
            }

            <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
                            <Outlet context={{ userProfile } satisfies ContextType} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
                
        </>
    )
}

export function useUserProfile() {
    return useOutletContext<ContextType>();
}