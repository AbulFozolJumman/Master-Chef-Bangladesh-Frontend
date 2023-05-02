import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar className='mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='fs-1 fw-bold' href="#home">Master Chef Bangladesh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none text-white fw-bold p-3' to="/">Home</Link>
                        <Link className='text-decoration-none text-white fw-bold p-3' to="/blog">Blog</Link>
                        <Link className='text-decoration-none text-white fw-bold p-3' to="/login">Login</Link>
                        <Link className='text-decoration-none text-white fw-bold p-3' to="/error">Error</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;