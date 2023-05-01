import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <Container className='w-25 mx-auto'>
                <h2>Please Login!</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't Have an Account? <Link to="/register">Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success">

                    </Form.Text>
                    <Form.Text className="text-danger">

                    </Form.Text>
                </Form>
                <div className="my-4">
                    <Button className="me-4 mb-3" variant="btn btn-success"><FaGoogle /> Sign in with Google</Button>
                    <Button className="me-4 mb-3" variant="btn btn-info"><FaGithub /> Sign in with Github</Button>
                </div>
            </Container>
        </div>
    );
};

export default Login;