import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import {  NavLink } from 'react-router-dom';
import "./Navbar.css"

const Navigation = () => {
    const { user, userSignOut } = useContext(AuthContext);
    // console.log(user);

    
    const handleSignOut = () => {
        userSignOut()
        .then(() => {})
          .catch((error) => {
            console.log(error);
          });
    }

    return (
        <Navbar className='mb-5' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className='fs-1 fw-bold' href="#home">Master Chef Bangladesh</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/">Home</NavLink>
                        <NavLink  className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/blog">Blog</NavLink>
                        {
                            user ?
                            <>
                                <img title={user.displayName} style={{ height: "50px", width: "50px", borderRadius: "50%" }} src={user.photoURL} alt="" />
                                <NavLink  className='link' onClick={handleSignOut}>Sign out</NavLink>
                            </>
                            : <NavLink  className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/login">Login</NavLink>
                        }
                        <NavLink  className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/error">Error</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;