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
            <footer className="bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" />
                                        <label className="form-label" for="form5Example2">Email address</label>
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>

                <div class="container p-4 pb-0">
                    <h2>Follow us on</h2>
                    <section class="mb-4">
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-facebook-f"><FaFacebook/></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-twitter"><FaTwitter/></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-google"><FaGoogle/></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-instagram"><FaGithub/></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-linkedin-in"><FaInstagram/></i></a>
                        <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                        ><i class="fab fa-github"><FaLinkedinIn/></i></a>
                    </section>
                </div>

                <div className="text-center p-3">
                    © 2020 Copyright: <Link className='text-decoration-none text-white fw-bold' to="/">Master Chef Bangladesh</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;