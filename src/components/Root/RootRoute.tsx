import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Messaging from "../Messaging/Messaging";
import { Outlet, useNavigation, useOutletContext } from "react-router-dom";
import "./RootRoute.css";
import { getuserProfile, UserProfile } from "../../apis/HttpDataApis";
import { useLoaderData, LoaderFunction } from "react-router-typesafe";
import ScrollToTop from "../../utils/ScrollToTop";

type ContextType = { userProfile: UserProfile | null };

// eslint-disable-next-line react-refresh/only-export-components
export const loader = (async () => {
    return await getuserProfile();
}) satisfies LoaderFunction;

export default function Root() {

    const navigation = useNavigation();
    const userProfile = useLoaderData<typeof loader>();
    const searchParams = new URLSearchParams(location.search);
    const homepage = location.pathname === '/';

    const containerClass = homepage ? 'container-fluid' : 'container';

    let message = '';
    const loggedOnMessage = userProfile ? 'Hi ' + userProfile.firstName + ', thanks for logging on to the ' + import.meta.env.VITE_APPLICATION_NAME + '!' : '';
    const loggedOffMessage = 'You have now logged out of ' + import.meta.env.VITE_APPLICATION_NAME;

    if (searchParams.has('logged-on')) {
        message = loggedOnMessage;
    } else if (searchParams.has('logged-out')) {
        message = loggedOffMessage;
    }

    return (

        <>
            <ScrollToTop />
            <Header userprofile={userProfile} />

            {message &&
                <Messaging message={message} />
            }

            <section id="main-content" className="">
                <div className={containerClass}>
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