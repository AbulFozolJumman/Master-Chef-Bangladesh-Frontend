import { useContext } from "react";
import { Button, Container, Form, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from "../Provider/AuthProvider";

// This is website register page
const Register = () => {
    const { createUser, updateUserData, error, setError, loading } = useContext(AuthContext);

    // Form submit handler
    const handleSubmit = (event) => {
        event.preventDefault()
        setError("")
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
        
        createUser(email, password)
            .then((result) => {
                const signedUser = result.user;
                console.log(signedUser);
                updateUserData(signedUser, name, photo)
                form.reset()
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // Loading spinner
    if(loading){
        return <Button className="mx-auto m-5 d-block gap-3 align-items center d-flex" variant="primary" disabled>
        <Spinner animation="border" variant="danger" />
        <span className="fw-bold">Loading...</span>
      </Button>
    }

    return (
        <div>
            <Container className='w-25 mx-auto'>
                <h2>Please Register!</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Already Have an Account? <Link to="/login">Login</Link>
                    </Form.Text> <br />
                    <Form.Text className="text-success">

                    </Form.Text> <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Register;