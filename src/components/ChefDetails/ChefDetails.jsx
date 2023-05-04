import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import "./ChefDetails.css"
import Row from 'react-bootstrap/Row';
import Recipe from '../Recipe/Recipe';

// All the chefs recipe items information will show here
const ChefDetails = () => {
    const { state } = useLocation();
    const { id } = state;
    const { chefs } = useContext(AuthContext);
    const chef = chefs.find(c => c.id === id);
    const { name, numberOfRecipes, likes, yearsOfExperience, picture, bio, recipes } = chef;
    return (
        <div>
            <div className="chef-banner">
                <img src={picture} alt="" />
                <div className="chef-info">
                    <h2 className='fw-bold'>{name}</h2>
                    <p className="bio">{bio}</p>
                    <p className="likes">{likes}</p>
                    <p className="recipes">{numberOfRecipes}</p>
                    <p className="experience">{yearsOfExperience}</p>
                </div>
            </div>
            <div>
                <h2 className='text-center fw-bold mt-5 mb-4'>Top Recipes of {name}</h2>
                <Row xs={1} md={3} className="g-4 container mx-auto">
                    {
                        recipes?.map((recipe, index) => <Recipe key={index} recipe={recipe}></Recipe>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default ChefDetails;