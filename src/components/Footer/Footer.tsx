import './Footer.css';
import GitHubButton from 'react-github-btn'

export default function Footer() {

    return (
        <>
            <footer id="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-top-area">
                            <div className="row d-flex flex-wrap justify-content-between">
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <img src="/images/book-club-logo.jpeg" alt="logo" />
                                        <p><b>The Cloudy Book Club</b> - reminding me of what books I have read recently so I don't buy them again!</p>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <h5 className="widget-title pb-2">Help</h5>
                                        <ul className="menu-list list-unstyled">
                                            <li className="menu-item pb-2">
                                                <a href="/tandcs">Help and T&Cs</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="/privacy">Privacy</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="/feeds/rss">RSS feed</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-sm-6 pb-3">
                                    <div className="footer-menu">
                                        <h5 className="widget-title pb-2">Source code</h5>
                                        <ul className="menu-list list-unstyled ">
                                            <li className="menu-item pb-2">
                                                <a href="https://github.com/aidanwhiteley/books">Back end code</a>
                                            </li>
                                            <li className="menu-item pb-2">
                                                <a href="https://github.com/aidanwhiteley/books-react">Front end code</a>
                                            </li>
                                            <li>
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
                <hr />
            </footer>
            <div id="footer-bottom">
                <div className="container">
                    <div className="row d-flex flex-wrap justify-content-between">
                        <div className="col-md-4 col-sm-6">
                        </div>
                        
                        <div className="col-md-4 col-sm-6">
                            <div className="copyright">
                                <p>© Copyright 2024 Aidan Whiteley.
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