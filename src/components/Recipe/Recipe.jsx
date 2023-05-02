import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./Recipe.css"
import Toast from 'react-bootstrap/Toast';

const Recipe = ({ recipe }) => {
    const { name, photo, ingredients, rating, method } = recipe;
    const [showToast, setShowToast] = useState(false);
    const [disableButton, setDisableButton] = useState(false);

    const handleButtonClick = () => {
        setShowToast(true);
        setDisableButton(true);
    };

    const handleToastClose = () => {
        setShowToast(false);
    };

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className='w-full' style={{ height: "300px" }} variant="top" src={photo} />
                    <Card.Body>
                        <h2 className='fw-bold'>{name}</h2>
                        <p><span className='fw-bold'>Ingredients:</span> {ingredients}</p>
                        <p><span className='fw-bold'>Cooking Method:</span> {method}</p>
                        <p>{rating} out of 5 stars</p>
                        <Button onClick={handleButtonClick} disabled={disableButton}>Add to favorite</Button>
                        <Toast onClose={handleToastClose} show={showToast} delay={3000} autohide>
                            <Toast.Header>
                                <strong className="mr-auto">Success</strong>
                            </Toast.Header>
                            <Toast.Body>Added to favorite recipes successfully</Toast.Body>
                        </Toast>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Recipe;