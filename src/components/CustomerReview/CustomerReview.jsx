import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/Card';

// Review Data
const fakeReviews = [
    {
        id: 1,
        title: 'অসাধারণ স্বাদ',
        content: 'এটি সত্যিই অসাধারণ ছিল! একটি দারুণ ভোজন এবং অসাধারণ সেবা।',
        author: 'সামির রহমান'
    },
    {
        id: 2,
        title: 'অসাধারণ সার্ভিস',
        content: 'এখানে খাওয়া খুব ভালো ছিল এবং কর্মচারীরা অসাধারণ সার্ভিস সরবরাহ করে।',
        author: 'নাজমুল হক'
    },
    {
        id: 3,
        title: 'বিশেষ অভিজ্ঞতা',
        content: 'খাওয়ার সময় আমরা বিশেষ অভিজ্ঞতা অনুভব করেছি। স্বাদ সত্যিই অসাধারণ ছিল।',
        author: 'তানভীর হোসেন'
    },
    {
        id: 4,
        title: 'দারুণ ভোজন',
        content: 'এখানে খাওয়া খুব ভালো ছিল। আমি নিয়মিত এখানে যাই এবং সব সময় সন্তুষ্ট হই।',
        author: 'ফারহানা ইসলাম'
    },
    {
        id: 5,
        title: 'সুন্দর ভাবে পরিচালিত',
        content: 'এখানে সবকিছু সুন্দর ভাবে পরিচালিত হয়। খাদ্য অসাধারণ ছিল এবং পরিবেশ সুন্দর।',
        author: 'আহমেদ হোসেন'
    },
    {
        id: 6,
        title: 'অসাধারণ খাবার',
        content: 'খাবার অসাধারণ ছিল। প্রতিটি ডিশ আমার জন্য স্বাদস্থলী ছিল। একটি পুনরাবৃত্তির অপেক্ষা করছি!',
        author: 'সাদিয়া খাতুন'
    }
];

const CustomerReview = () => {
    return (
        <Container className="reviews">
            <h2 className='text-center fw-bold mt-5 mb-4'>কাস্টমার রিভিউ</h2>
            <Row className="equalHeight mb-5 g-4">
                {fakeReviews.map(review => (
                    <Col xs={12} md={4} key={review.id}>
                        <CardDeck>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{review.title}</Card.Title>
                                    <Card.Text>{review.content}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{review.author}</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};


export default CustomerReview;