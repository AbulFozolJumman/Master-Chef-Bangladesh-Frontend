import React from 'react';
import { useContext } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import Row from 'react-bootstrap/Row';
import { AuthContext } from '../Provider/AuthProvider';

// This is Chefs container page
const Chefs = () => {
    const {chefs} = useContext(AuthContext);

    return (
        <div>
        <h2 className='text-center mt-5 mb-4'>Master Chefs of Bangladesh</h2>
            <Row xs={1} md={3} className="g-4 mb-5 container mx-auto">
                {
                    chefs?.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </Row>
        </div>
    );
};

export default Chefs;