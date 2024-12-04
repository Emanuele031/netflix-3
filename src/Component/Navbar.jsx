import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap'; 
import logo from '../assets/logo.png'; 
import SearchBar from './SearchBar'; 

const MyNavbar = ({ searchQuery, onSearch }) => {
  return (
    <Navbar expand="lg">
      <Container>
       
        <Navbar.Brand href="#">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '100px', height: '55px' }}
          />
        </Navbar.Brand>

       
        <Navbar.Toggle aria-controls="navbar-nav" />

        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="fw-bold text-light">Home</Nav.Link>
            <Nav.Link as={Link} to="/tv-shows" className="fw-bold text-light">TV Shows</Nav.Link>
            <Nav.Link as={Link} to="/movies" className="fw-bold text-light">Movies</Nav.Link>
            <Nav.Link as={Link} to="/recently-added" className="fw-bold text-light">Recently Added</Nav.Link>
            <Nav.Link as={Link} to="/my-list" className="fw-bold text-light">My List</Nav.Link>
          </Nav>

          
          <SearchBar searchQuery={searchQuery} onSearch={onSearch} />

          
          <div className="d-flex align-items-center">
            <i className="bi bi-search text-light mx-2"></i>
            <div id="kids" className="fw-bold mx-2 text-light">
              KIDS
            </div>
            <i className="bi bi-bell text-light mx-2"></i>
            <i className="bi bi-person-circle text-light"></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
