import { NavLink } from "react-router-dom";
import "./Header.css"

export default function Header() {

    const style = {"display": "none"};
    
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" style={style}>
                <symbol id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <title>Search</title>
                    <path fill="currentColor" d="M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="nav-icon" viewBox="0 0 16 16">
                    <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="navbar-icon" viewBox="0 0 16 16">
                    <path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z" />
                </symbol>
            </svg>  
            
            <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
                <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
                    <div className="container-fluid">
                        <NavLink to='/' className="navbar-brand brand">
                            <span className="brandStuff">The Cloudy Book Club</span>
                        </NavLink>
                        <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
                            <svg className="navbar-icon">
                            <use xlinkHref="#navbar-icon"></use>
                            </svg>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                            <div className="offcanvas-header px-4 pb-0">
                                <NavLink to='/' className="navbar-brand">
                                    <img src="images/main-logo.png" className="logo" />
                                </NavLink>
                                <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <NavLink to='/' className={({ isActive, isPending }) =>
                                            isActive ? "nav-link me-4 active" : isPending ? "nav-link me-4 pending" : ""}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to='/books/recent' className={({ isActive, isPending }) =>
                                            isActive ? "nav-link me-4 active" : isPending ? "nav-link me-4 pending" : ""}>Recently reviewed</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-4" href="#">By rating</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-4" href="#">By author</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link me-4" href="#">By reviewer</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Admin</a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#" className="dropdown-item">Add a book</a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">Admin users</a>
                                        </li>
                                    </ul>
                                    </li>
                                    <li className="nav-item">
                                        <div className="user-items ps-5">
                                            <ul className="d-flex justify-content-end list-unstyled">
                                                <li className="search-item pe-3">
                                                    <a href="#" className="search-button">
                                                    <svg className="search">
                                                        <use xlinkHref="#search"></use>
                                                    </svg>
                                                    </a>
                                                </li>
                                                <li className="pe-3">
                                                    <a href="#">
                                                    <svg className="user">
                                                        <use xlinkHref="#user"></use>
                                                    </svg>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        
        </>
    )
}