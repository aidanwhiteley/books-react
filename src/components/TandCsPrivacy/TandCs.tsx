import { useUserProfile } from '../../components/Root/RootRoute';
import { Link } from "react-router-dom";

export default function TandCs() {

    const { userProfile } = useUserProfile();
    const isAnonymous = !userProfile;
    const isUser = userProfile && (userProfile.highestRole === 'ROLE_USER');
    const isEditor = userProfile && (userProfile.highestRole === 'ROLE_EDITOR');
    const isAdmin = userProfile && (userProfile.highestRole === 'ROLE_ADMIN');

    return (
        <>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-12">
                        <div className="help">

                            <h1>Help, Information &amp; T&amp;Cs</h1>

                            <div className="helpIntro">
                                {/* { (isUser && userProfile.authProvider && userProfile.picture) &&
                                    <img className="float-end" width="100" height="100" src={userProfile.picture} alt="Users profile picture" />
                                } */}

                                <p>Hi {(userProfile && userProfile.firstName) && userProfile.firstName} </p>
                                <p>welcome to {import.meta.env.VITE_APPLICATION_NAME}! Here's some quick info on how to get the best out of the application.
                                </p>
                            </div>

                            {userProfile && userProfile.firstVisit &&
                                <div className="well">
                                    <h3>First logon</h3>
                                    <p>Thanks so much for logging on to the {import.meta.env.VITE_APPLICATION_NAME} for the first time. There's a few pointers
                                        below about how the application works. You can always re-read these by clicking the Help / Info link at any
                                        time.
                                    </p>
                                </div>
                            }

                            <h3>Your current permissions</h3>
                            {(isAnonymous || isUser) &&
                                <div>
                                    {isAnonymous &&
                                        <p>Thanks for browsing the site.</p>
                                    }
                                    <p>You can currently read book reviews and comments entered by our members. However, you
                                        cannot post your own reviews or comment on the reviews of others. Additionally, you can't see details of who
                                        has posted a review or comment.
                                        {isAnonymous &&
                                            <span> Logging on via Google or Facebook is the first
                                                step in getting more access to the application and its content.
                                            </span>
                                        }
                                    </p>

                                    {(isUser && !userProfile.email) &&
                                        <p>If {import.meta.env.VITE_BOOK_CLUB_MEMBERS_SCOPE} and want to get full access to existing
                                            reviews and comments and maybe write your own reviews or comments, please drop an email
                                            to <a href={'mailto:' + import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL + ' ' + '?subject=' + import.meta.env.VITE_APPLICATION_NAME +
                                                ' - access request'}>{import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL}</a> and we'll get you added to the list of registered editors asap.
                                        </p>
                                    }
                                    {(isUser && userProfile.email) &&
                                        <p>If {import.meta.env.VITE_BOOK_CLUB_MEMBERS_SCOPE}, please check your {userProfile.email} email
                                            account (including the spam folder) for an email confirming
                                            that access has been provided to {import.meta.env.VITE_APPLICATION_NAME}. If you no longer use that email address (which was
                                            looked up from your {userProfile.authProvider.toLowerCase()} account), please drop an email
                                            to <a href={'mailto:' + import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL + ' ' + '?subject=' + import.meta.env.VITE_APPLICATION_NAME +
                                                ' - access request'}>{import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL}</a> and we'll get you added to the list of registered editors asap.
                                        </p>
                                    }
                                </div>
                            }

                            {(isEditor && !isAdmin) &&
                                <div>
                                    <p>Thanks for registering with {import.meta.env.VITE_APPLICATION_NAME}.</p>
                                    <p>You currently have full permissons to be able to:</p>
                                    <ul>
                                        <li>Create, update and delete your own book reviews</li>
                                        <li>See the name (and maybe the picture) of other people who have been writing book reviews</li>
                                        <li>Comment on other people's book reviews (and later delete your comment if necessary <i
                                            className="ti-face-smile"></i>)</li>
                                        <li>Search by book reviewer (plus all the usual search criteria)</li>
                                    </ul>
                                    <p>Note: the application doesn't allow you to get in touch with book reviewers directly e.g. you can't see
                                        someone elses email address.</p>
                                </div>
                            }

                            {isAdmin &&
                                <div>
                                    <p>Thanks for logging in to the site with admin privileges.</p>
                                    <p>You are a god user. You can do everything!</p>
                                </div>
                            }

                            <h3>How does it all work</h3>
                            <ul className="helpList">
                                <li>Someone signs up for the application and writes a review of a book they have just read</li>
                                <li>Someone else who has signed up for the application reads the review and sort of agrees but they read the
                                    book slightly differently. They reply to the review with a "comment"</li>
                                <li>Someone else who has signed up for the application reads the comment and gets what the person was saying
                                    but sees it from a different angle. They reply with a follow on comment</li>
                                <li>... and the world continues to go round while we natter about books...</li>
                                <li>In the mean time, someone else reads the review and thinks &quot;<i>that sounds interesting - where can I
                                    find out more without borrowing the book from my neighbour?</i>&quot; Ah - happy days - there may be two
                                    options
                                    <ul>
                                        <li>Many book reviews on the application have a Google Books Preview link <br />
                                            <img src="./images/gbs_preview_button1.gif" alt="Google Books" />. If the book review has such a link, click
                                            it to read some or all of the book online.
                                        </li>
                                        <li>Click the "Google Books Summary" tab to read the book review on Google. Caveat Reader - Google Books
                                            reviews vary in quality!
                                        </li>
                                        <li>When entering a book review, the application will show a range of possible matches on Google Books (based
                                            on what you have typed in to the book's Title field). If you
                                            scroll through the suggestions and select the best match, this adds the Google Summary and Google Preview
                                            functionality to your book review.</li>
                                        <li>You can search for existing Book Reviews by a multitude of options.
                                        </li>
                                        <li>That's about it - that's all it does at the moment.</li>
                                    </ul>
                                </li>
                            </ul>

                            <h3>T&amp;Cs</h3>
                            <p>The web site T&amp;Cs are pretty short.</p>
                            <ul className="helpList">
                                <li>If writing a review or comment on the site, please remember that:</li>
                                <ul>
                                    <li>While your name may only visible to other &quot;editors&quot; of the site, anything you write in a
                                        review or comment is publically visible on t'internet and will, eventually, be slurped by Google. </li>
                                    <li>If you logon, your name, picture (if any) and email address is read from Google or Facebook and your
                                        name and picture (but not email address) is visible to other web site &quot;editors&quot; on any reviews
                                        or comments you make</li>
                                    <li>Be nice - I'm told authors like Jeffery Archer and E.L. James regularly read the reviews on this site.
                                        Even your least favourite authors probably have feelings (and some, no doubt, can be litigious).</li>
                                </ul>
                                <li>When first logging on to the application you will be asked by Google or Facebook whether you are happy for
                                    {import.meta.env.VITE_APPLICATION_NAME} to access your basic profile details (including your name, email address and
                                    picture). If you are <b>not</b> happy, say &quot;no&quot; - simples.
                                </li>
                                <li>You can delete or update any book review you have written at any point. If you have commented on a book
                                    review and the reviewer deletes their review, your carefully written comment will head inexorably towards <a
                                        href="https://en.wikipedia.org/wiki/Null_device" target="_blank">/dev/null</a> - sorry!
                                </li>
                                <li>You can delete (but not update) any comment you have left on any book review at any point. However, if you
                                    delete a comment, it will be shown as &quot;deleted by &lt;your name&gt;&quot; rather than completely
                                    removed.
                                </li>
                                <li>Finally, {import.meta.env.VITE_APPLICATION_NAME} is not responsible for the reviews or comments posted by web site
                                    members. However, we will immediately take down any
                                    user generated content that is highlighted to us as being clearly libellous or otherwise illegal. Please use
                                    the <i className="ti-email"></i> Contact link to get in touch.
                                </li>
                            </ul>

                            <h3>Mobiles and tablets</h3>
                            <p>The application should work fine on mobile and tablet screens - please let me know via the Contact link in the page footer if it
                                doesn't on your device.</p>

                            <h3>Logons</h3>
                            <p>Logons to {import.meta.env.VITE_APPLICATION_NAME} currently last a day. If you don't click the logout button,
                                your kids will be logged on as you if they can also use the
                                device you log on with!</p>
                            <p>If you usually stay logged on to Google or Facebook on the device you are accessing {import.meta.env.VITE_APPLICATION_NAME} with,
                                when you click the "Logon with ..." button you will be automatically logged into the
                                {import.meta.env.VITE_APPLICATION_NAME} with the user you are currently logged into Google or Facebook with.</p>
                            <p>Basically, if you share devices, think about when you want to logout from {import.meta.env.VITE_APPLICATION_NAME} and Google
                                / Facebook.</p>

                            <h3>Privacy Policy</h3>
                            <p>There's some stuff <Link to="/privacy">here</Link>.</p>

                            <hr />

                            <p>Finally,
                                {(isAnonymous || isUser) && <span>if you do register for the site,</span>} please remember - the
                                first rule of <del><i>Fight Club</i></del> {import.meta.env.VITE_APPLICATION_NAME}<br />&quot;<i>You do not give any Jeffery
                                    Archer book more than than one star in a review!</i>&quot;
                            </p>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}