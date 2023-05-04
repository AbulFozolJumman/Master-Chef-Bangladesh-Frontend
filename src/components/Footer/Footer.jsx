import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-white mb-0 mt-5">
                <div className="container p-4 pb-0">
                    <section>
                        <p className="d-flex justify-content-center align-items-center">
                            <span className="me-3">Register for free</span>
                            <Link to="/register">
                                <button type="button" className="btn btn-outline-light btn-rounded">
                                    Sign up!
                                </button>
                            </Link>
                        </p>
                    </section>
                </div>

                <div className="container p-4 pb-0">
                    <h2>Follow us on</h2>
                    <section className="mb-4">
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-facebook-f"><FaFacebook /></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-twitter"><FaTwitter /></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-google"><FaGoogle /></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-instagram"><FaGithub /></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-linkedin-in"><FaInstagram /></i></a>
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i className="fab fa-github"><FaLinkedinIn /></i></a>
                    </section>
                </div>

                <div className="text-center p-3">
                    © 2023 Copyright: <Link className='text-decoration-none text-white fw-bold' to="/">Master Chef Bangladesh</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;