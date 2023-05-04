import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

// This is website Private route to protect chef details page
const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    // Loading spinner
    if(loading){
        return <Button className="mx-auto m-5 d-block gap-3 align-items center d-flex" variant="primary" disabled>
        <Spinner animation="border" variant="danger" />
        <span className="fw-bold">Loading...</span>
      </Button>
    }

    if (user) {
        return children; 
    }
    return <Navigate to="/login" replace></Navigate> ;
};

export default PrivateRoute;