import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Messaging from "../Messaging/Messaging";
import { Outlet, useNavigation, useOutletContext  } from "react-router-dom";
import "./RootRoute.css";
import { getuserProfile, UserProfile } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction} from "react-router-typesafe";

// For testing only
// import data from "./testuser.json";

type ContextType = { userProfile: UserProfile | null };

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (async () => {
    return await getuserProfile();
}) satisfies LoaderFunction;

export default function Root() {

    const navigation = useNavigation();
    const userProfile = useLoaderData<typeof loader>();
    const searchParams = new URLSearchParams(location.search);

    let message = '';
    const loggedOnMessage = userProfile ? 'Hi ' + userProfile.firstName + ', thanks for logging on to the Cloudy Book Club!' : '';
    const loggedOffMessage = 'You have now logged out of The Cloudy Book Club'; 

    if (searchParams.has('logged-on')) {
        message = loggedOnMessage;
    } else if (searchParams.has('logged-out')) {
        message = loggedOffMessage;
    }

    return (

        <>
            <Header userprofile={userProfile} />

            {message && 
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

// eslint-disable-next-line react-refresh/only-export-components
export function useUserProfile() {
    return useOutletContext<ContextType>();
}