import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import "./ChefDetails.css"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const ChefDetails = () => {
    const { state } = useLocation();
    const { id } = state;
    const { chefs } = useContext(AuthContext);
    const chef = chefs.find(c => c.id === id);
    const { name, numberOfRecipes, likes, yearsOfExperience, picture, bio } = chef;
    return (
        <div>
            <div className="chef-banner">
                <img src={chef.picture} alt="" />
                <div className="chef-info">
                    <h2>{name}</h2>
                    <p className="bio">{bio}</p>
                    <p className="likes">{likes}</p>
                    <p className="recipes">{numberOfRecipes}</p>
                    <p className="experience">{yearsOfExperience}</p>
                </div>
            </div>
            <div>
                <h1 className='text-center fw-bold mt-5'>Top Recipes of {name}</h1>
                <Row xs={1} md={3} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                </Row>
            </div>
        </div>
    );
};

export default ChefDetails;