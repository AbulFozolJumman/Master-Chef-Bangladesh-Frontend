import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import Row from 'react-bootstrap/Row';

const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("https://master-chef-bangladesh-server-abulfozoljumman.vercel.app/chefs");
          const newData = await response.json();
          setChefs(newData);
        };
      
        fetchData();
      }, []);
      

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