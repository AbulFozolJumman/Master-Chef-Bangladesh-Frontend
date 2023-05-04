import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

// All the Chefs information of cards here
const ChefCard = ({ chef }) => {
    const { name, numberOfRecipes, likes, yearsOfExperience, picture, id } = chef;

    return (
        <Col>
            <Card>
                <LazyLoad height={800}>
                    <Card.Img className='w-full' style={{ height: "300px" }} variant="top" src={picture} />
                </LazyLoad>
                <Card.Body>
                    <h2>{name}</h2>
                    <h4>Experience: {yearsOfExperience} Years</h4>
                    <h5>Number of Recipes: {numberOfRecipes}</h5>
                    <h5>Likes: {likes}</h5>
                    <Link to="/ChefDetails" state={{ id }}>
                        <button className='btn btn-primary'>View Recipes</button>
                    </Link>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefCard;