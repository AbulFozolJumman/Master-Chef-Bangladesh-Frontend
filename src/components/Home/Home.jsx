import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import { AuthContext } from '../Provider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

// This is website Home page
const Home = () => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <Button className="mx-auto m-5 d-block gap-3 align-items center d-flex" variant="primary" disabled>
        <Spinner animation="border" variant="danger" />
        <span className="fw-bold">Loading...</span>
      </Button>
    }
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;