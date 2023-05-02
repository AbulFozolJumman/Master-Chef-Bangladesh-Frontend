import React from 'react';
import { useContext } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import Row from 'react-bootstrap/Row';
import { AuthContext } from '../Provider/AuthProvider';

const Chefs = () => {
      
    const {chefs} = useContext(AuthContext);

    return (
        <div>
            <Row xs={1} md={3} className="g-4 my-5 container mx-auto">
                {
                    chefs?.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                }
            </Row>
        </div>
    );
};

export default Chefs;