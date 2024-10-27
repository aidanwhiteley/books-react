import { Link, useLocation, Form, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, PropsWithChildren } from "react";
import "./Header.css";
import { UserProfile } from '../../apis/HttpDataApis';

export interface Props {
  userprofile: UserProfile | null;
}

export default function Header(props:  PropsWithChildren<Props>) {

    const location = useLocation();
    const navigate = useNavigate();

    const userProfile = props.userprofile;

    const [term, setTerm] = useState('');
    const [expanded, setExpanded] = useState(false);

    const activeKey = location.pathname === '/' ? '/home' : location.pathname;

    return (
      <Navbar collapseOnSelect expand="lg" bg="light" data-bs-theme="light" sticky="top" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img alt="Site logo" src="/images/book-club-logo.png" height="30" className="d-inline-block align-top" />{' '}
            {import.meta.env.VITE_APPLICATION_NAME}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey={activeKey} className="me-auto">
              <Nav.Link as={Link} eventKey="/home" to="/" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} eventKey="/books/recent" to="/books/recent" onClick={() => setExpanded(false)}>
                Recently Reviewed
              </Nav.Link>
              <Nav.Link as={Link} eventKey="/books/find" to="/books/find" onClick={() => setExpanded(false)}>
                Find a review
              </Nav.Link>

              {(userProfile && (userProfile.highestRole === 'ROLE_EDITOR' || userProfile.highestRole === 'ROLE_ADMIN')) &&
                <Nav.Link as={Link} eventKey="/create" to="/books/create" onClick={() => setExpanded(false)}>
                  Add a book review
                </Nav.Link>
              }

              {!userProfile && 
                <Nav.Link as={Link} eventKey="/logon" to="/logon" onClick={() => setExpanded(false)}>
                  Logon
                </Nav.Link>
              }
              {userProfile && 
                <Nav.Link as={Link} eventKey="/logoff" to="/logoff" onClick={() => setExpanded(false)}>
                  Logoff
                </Nav.Link>
              }
            </Nav>
            <div id="book-search">
              <Form id="search-form" role="search" navigate={false}>
                <input id="term" aria-label="Search book reviews"
                  placeholder="Search book reviews" type="search" name="term" value={term}
                  onChange={(event) => {
                      setTerm(event.target.value);
                  }}
                  onKeyDown={event => {
                      if (event.key === 'Enter') {
                          event.preventDefault();
                          setExpanded(false);
                          const searchTerm = term;
                          setTerm('');
                          navigate('/books/search?term=' + searchTerm);  
                      }
                    }
                  }
                />
              </Form>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}