import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

// This is website Login page
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { signIn, setUser, error, setError, googleSignIn, githubSignIn } = useContext(AuthContext);

    // User email/password sign in handler
    const handleUserSignIn = (event) => {
        event.preventDefault()
        setError("")
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                setUser(loggedUser)
                navigate(from, { replace: true })
                form.reset()
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    // User Google sign in handler
    const handleGoogleSignIn = () => {
        setError("")
        googleSignIn()
            .then((result) => {
                const googleUser = result.user;
                // console.log(googleUser);
                // navigate(location.state.pathname || "/")
                setUser(googleUser);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    // User Github sign in handler
    const handleGithubSignIn = () => {
        setError("")
        githubSignIn()
            .then((result) => {
                const githubUser = result.user;
                setUser(githubUser);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    return (
        <div>
            <Container className='w-25 mx-auto'>
                <h2>Please Login!</h2>
                <Form onSubmit={handleUserSignIn}>
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

                    </Form.Text> <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
                <div className="my-4">
                    <Button onClick={handleGoogleSignIn} className="me-4 mb-3" variant="btn btn-success"><FaGoogle /> Sign in with Google</Button>
                    <Button onClick={handleGithubSignIn} className="me-4 mb-3" variant="btn btn-info"><FaGithub /> Sign in with Github</Button>
                </div>
            </Container>
        </div>
    );
};

export default Login;