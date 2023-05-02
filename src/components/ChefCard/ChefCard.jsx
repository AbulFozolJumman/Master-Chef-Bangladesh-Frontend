import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const ChefCard = ({ chef }) => {
    const {name, numberOfRecipes, likes, yearsOfExperience, picture} = chef;
    
    return (
        <Col>
            <Card>
                <Card.Img className='w-full' style={{height: "300px"}} variant="top" src={picture} />
                <Card.Body>
                    <h2>{name}</h2>
                    <h4>Experience: {yearsOfExperience} Years</h4>
                    <h5>Number of Recipes: {numberOfRecipes}</h5>
                    <h5>Likes: {likes}</h5>
                    <button className='btn btn-primary'>View Recipes</button>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCard;