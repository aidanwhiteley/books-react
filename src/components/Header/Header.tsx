import { Link, useLocation, Form, useNavigation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import "./Header.css";


export default function Header() {
    const location = useLocation();
    const navigation = useNavigation();
    const navigate = useNavigate();

    const [term, setTerm] = useState('');

    const activeKey = location.pathname === '/' ? '/home' : location.pathname;
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("term");

    return (
        <Navbar expand="lg" className="theme-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            The Cloudy Book Club
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={activeKey} className="me-auto">
              <Nav.Link as={Link} eventKey="/home" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} eventKey="/books/recent" to="/books/recent">
                Recently Reviewed
              </Nav.Link>
              <Nav.Link as={Link} eventKey="/books/find" to="/books/find">
                Find a review
              </Nav.Link>
            </Nav>
            <div id="book-search">
                <Form id="search-form" role="search" navigate={false}>
                <input
                    id="term"
                    className={searching ? "loading" : ""}
                    aria-label="Search book reviews"
                    placeholder="Search book reviews"
                    type="search"
                    name="term"
                    value={term}
                    onChange={(event) => {
                        setTerm(event.target.value);
                    }}
                    onKeyDown={event => {
                        
                        if (event.key === 'Enter') {
                            event.preventDefault();
                            navigate('/books/search?term=' + term);
                        }
                      }
                    }
                />
                <div
                    id="search-spinner"
                    aria-hidden
                    hidden={!searching}
                />
                <div
                    className="sr-only"
                    aria-live="polite"
                ></div>
                </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}