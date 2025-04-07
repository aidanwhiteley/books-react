import './Footer.css';
import GitHubButton from 'react-github-btn';
import { Link } from "react-router-dom";

export default function Footer() {

    return (
        <>
            <hr />
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-top-area">
                            <div className="row d-flex flex-wrap justify-content-between">
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <Link className="d-none d-md-block" to="/">
                                            <img src="/images/book-club-logo.jpeg" alt="logo" />
                                        </Link>
                                        <p><b>{import.meta.env.VITE_APPLICATION_NAME}</b> - <span className="fst-italic">reminding me of what books I have read recently so I don't buy them again!</span></p>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <h5 className="widget-title pb-2">Usual stuff</h5>
                                        <ul className="menu-list list-unstyled">
                                            <li className="menu-item pb-2">
                                                <Link to="/books/stats">Book review stats</Link>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <Link to="/tandcs">Help and T&Cs</Link>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <Link to="/privacy">Privacy</Link>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="/feeds/rss">RSS feed</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <h5 className="widget-title pb-2">Versions</h5>
                                        <ul className="menu-list list-unstyled">
                                            <li className="menu-item pb-2">
                                                <a href="https://cloudybookclub.com/">Current (Htmx)</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="https://spa.cloudybookclub.com/">Previous (React)</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                Demo (TBC)
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-2 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <h5 className="widget-title pb-2">Software</h5>
                                        <ul className="menu-list list-unstyled ">
                                            <li className="menu-item pb-2">
                                                <a href="https://github.com/aidanwhiteley/books" target="_blank">Code - server side</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="https://github.com/aidanwhiteley/books/tree/develop/src/main/resources/templates" target="_blank">Code - front end (Htmx)</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="https://github.com/aidanwhiteley/books-react" target="_blank">Code - front end (React)</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href={import.meta.env.VITE_API_URL + '/swagger-ui/index.html'} target="_blank">API - read only</a>
                                            </li>
                                            <li className="github-stars">
                                                <GitHubButton href="https://github.com/aidanwhiteley/books" data-color-scheme="no-preference: light; light: light; dark: light;"
                                                    data-size="large" data-show-count="true" aria-label="Stars on GitHub">Stars</GitHubButton>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu contact-item">
                                        <h5 className="widget-title pb-2">Contact Us</h5>
                                        <p>Do you have any queries or suggestions?
                                            <a href={'mailto:' + import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL + ' ' + '?subject=' + import.meta.env.VITE_APPLICATION_NAME +
                                                ' - contact from website'}>{import.meta.env.VITE_BOOK_CLUB_ADMIN_EMAIL}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

            <div id="footer-bottom">
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-between">
                        <div className="col-md-4 col-sm-6">
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="copyright">
                                <p className="text-center">© Copyright 2025 <a href="https://aidanwhiteley.com/">Aidan Whiteley</a>.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}