export default function Privacy() {


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="privacy">

                            <p className="lead">
                                Here's the Privacy Policy for {import.meta.env.VITE_APPLICATION_NAME}.
                            </p>

                            <h2>Data and {import.meta.env.VITE_APPLICATION_NAME}</h2>

                            <p>
                                {import.meta.env.VITE_APPLICATION_NAME} maintains and uses the following data
                            </p>

                            <ul>
                                <li>
                                    <p>
                                        <b>Book review data</b> entered by users of the application (including book title, genre, rating and
                                        summary review).
                                    </p>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Data item</th>
                                                <th>Processing</th>
                                                <th>Processing purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Book title</td>
                                                <td>Stored</td>
                                                <td>To be able to display the title (or name) of the book</td>
                                            </tr>
                                            <tr>
                                                <td>Genre</td>
                                                <td>Stored</td>
                                                <td>To be able to display the genre of the book (e.g. novel, autobiography etc)</td>
                                            </tr>
                                            <tr>
                                                <td>Rating</td>
                                                <td>Stored</td>
                                                <td>To be able rate the book as either great, good, ok, poor or terrible</td>
                                            </tr>
                                            <tr>
                                                <td>Summary review</td>
                                                <td>Stored</td>
                                                <td>To be able see what the reviewer thought of the book. User's are asked to avoid "spoilers" (i.e.
                                                    giving away key details of a novel's plot)</td>
                                            </tr>
                                            <tr>
                                                <td>Google Books Data</td>
                                                <td>Stored</td>
                                                <td>To be able &quot;point&quot; to a selected Google Books entry enabling the display of an
                                                    appropriate book cover
                                                    image, Google Books book review and
                                                    (sometimes) a preview of the book on Google Books.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p><b>Requesting data deletion</b> The application developer is (in GDPR terms) both the "data controller"
                                        and "dataprocessor".
                                    </p>
                                    <p>
                                        If a user has created a book review then they have the ability to delete that book review at any time.
                                    </p>
                                    <p>
                                        If a user wants to request the amendment or deletion of any other book data in {import.meta.env.VITE_APPLICATION_NAME},
                                        please <a href={'mailto:' + import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL + '?subject=Book review data deletion Request'}>contact</a> the data controller and
                                        we'll agree what needs to be edited or entirely deleted.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Comments data</b> on book reviews on {import.meta.env.VITE_APPLICATION_NAME} - logged on users with the necessary
                                        permissions can comment on any other users book reviews.
                                    </p>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Data item</th>
                                                <th>Processing</th>
                                                <th>Processing purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Comment</td>
                                                <td>Stored</td>
                                                <td>To be able see a user's comments on a boook review</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>
                                        <b>Requesting data deletion</b> A user can always delete any comment that they have made on any book
                                        review.
                                        However, the comment will be replaced by <small>&quot;Comment deleted by __name__&quot;</small>
                                    </p>
                                    <p>
                                        If a user wants to request the amendment or complete deletion of any comment data in
                                        {import.meta.env.VITE_APPLICATION_NAME},
                                        please <a href={'mailto:' + import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL + '?subject=Book comment data deletion request'}>contact</a> the data controller
                                        and we'll agree what needs to be edited or entirely deleted.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Logon details</b> when logging on to {import.meta.env.VITE_APPLICATION_NAME} via Google or Facebook.
                                    </p>
                                    <p>
                                        Friends of the application developer are
                                        invited to log on to {import.meta.env.VITE_APPLICATION_NAME} -
                                        after which the "data processor" may add permissions to their account such that book reviews can be added or comments made on existing book reviews.
                                        There is nothing to stop anyone else logging on to the application but unless and until the "data
                                        processor" adds
                                        permissions to that logon's account, then
                                        logging on gets a user no additional access.
                                    </p>
                                    <p>
                                        When you log on to {import.meta.env.VITE_APPLICATION_NAME}, the application stores the following information (mostly
                                        provided by the Authorisation Server i.e. Google or Facebook):
                                    </p>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Data item</th>
                                                <th>Processing</th>
                                                <th>Processing purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>First name</td>
                                                <td>Stored</td>
                                                <td>To be able display a friendly greeting when logging on (and to confirm your identity)</td>
                                            </tr>
                                            <tr>
                                                <td>Last name</td>
                                                <td>Stored</td>
                                                <td>To be able display a friendly greeting when logging on (and to confirm your identity)</td>
                                            </tr>
                                            <tr>
                                                <td>Email address</td>
                                                <td>Stored</td>
                                                <td>To support communication to users if any change to {import.meta.env.VITE_APPLICATION_NAME} will affect their usage of it
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>The "provider key" on the authorisation server</td>
                                                <td>Stored</td>
                                                <td>To enable successful completion of logon processing</td>
                                            </tr>
                                            <tr>
                                                <td>Authorisation server used</td>
                                                <td>Stored</td>
                                                <td>To show the user whether they have logged on via Google or Facebook</td>
                                            </tr>
                                            <tr>
                                                <td>URL to user's avatar (if any)</td>
                                                <td>Stored</td>
                                                <td>To be able display an avatar when logging on (and to confirm your identity) and to display along side book reviews and comments</td>
                                            </tr>
                                            <tr>
                                                <td>Last logon dates</td>
                                                <td>Stored</td>
                                                <td>So the user can see the last logon date/time from their account (to have confidence no-one else
                                                    has used
                                                    their account)</td>
                                            </tr>
                                            <tr>
                                                <td>User's access level</td>
                                                <td>Set by the administrator and stored</td>
                                                <td>So that a user who has been given elevated access rights can do more on {import.meta.env.VITE_APPLICATION_NAME}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <p>
                                        <b>Requesting data deletion</b> If you no longer want {import.meta.env.VITE_APPLICATION_NAME} to store the above data for
                                        you,
                                        please <a href={'mailto:' + import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL + '?subject=' + import.meta.env.VITE_APPLICATION_NAME +
                                            ' data deletion request'}>contact the data controller</a> and we'll delete your data.
                                    </p>
                                    <p>
                                        If you want a copy of the above data that {import.meta.env.VITE_APPLICATION_NAME} holds for you, please
                                        send a <a href="https://ico.org.uk/for-the-public/getting-copies-of-your-information-subject-access-request/">subject access request</a> to <a href={'mailto:' + import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL + '?subject=' + import.meta.env.VITE_APPLICATION_NAME + ' Copy of my data'}>the data controller</a>.
                                    </p>
                                </li>
                            </ul>
                            <h2>Cookies and {import.meta.env.VITE_APPLICATION_NAME}</h2>
                            <p>{import.meta.env.VITE_APPLICATION_NAME} makes minimal use of cookies (and no use of local or session storage).
                                If you choose to logon to to the application a couple of cookies will be dropped by the application
                            </p>
                            <ul>
                                <li>A cookie named "CLOUDY-JWT" maintains a logon token for the user during their current logon session.
                                    This is a functional cookie - logged in access to the application won't work without it</li>
                                <li>A cookie named "XSRF-TOKEN" is used to protect the user against a type of hacking
                                    called cross site request forgery. This is a functional cookie - updates to the application data won't workwithout it
                                </li>
                                <li>
                                    The current version of {import.meta.env.VITE_APPLICATION_NAME} makes no use of any user tracking / tracking cookies - if you
                                    find any, please let me know!
                                </li>
                            </ul>
                            <h2>APIs and {import.meta.env.VITE_APPLICATION_NAME}</h2>
                            <p>{import.meta.env.VITE_APPLICATION_NAME} makes use of publicly available APIs. These include:</p>
                            <ul>
                                <li>The <a href="https://developers.google.com/books/docs/overview">Google Books API</a> -
                                    please see the <a href="https://policies.google.com/privacy">Google Privacy Policy</a></li>
                            </ul>

                            <hr />

                            <h2>Contacting us</h2>
                            <p>If you have any questions, concerns, or complaints regarding this privacy policy, we encourage you to contact us
                                using the details below:</p>

                            <p><a target="_blank" rel="nofollow"
                                href={'mailto:' + import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL + '?subject=' + import.meta.env.VITE_APPLICATION_NAME + ' Enquiry'}>{import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL}</a>
                            </p>

                            <p>This document was last updated on October 13th, 2024</p>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}