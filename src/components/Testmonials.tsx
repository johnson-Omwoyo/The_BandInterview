import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "./Testimonials.css";

const Rating = ({ rating = 0 }) => {
  const filledStars = Array(rating).fill("★");
  const emptyStars = Array(5 - rating).fill("☆");
  return (
    <div className="rating">
      {filledStars.map((star, index) => (
        <span key={index} className="star filled">
          {star}
        </span>
      ))}
      {emptyStars.map((star, index) => (
        <span key={index} className="star">
          {star}
        </span>
      ))}
    </div>
  );
};

const Testimonials = () => {
  const baseUrl = "http://localhost:3000";
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${baseUrl}/testmonials`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReviews(data[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchReviews();
  }, []);

  return (
    <Container className="testimonials my-5">
      <h2 className="text-center mb-4 category-name text-dark">Testimonials</h2>
      <Row>
        {reviews.map((review, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card className="shadow-sm rounded-lg">
              <CardBody>
                <CardTitle
                  tag="h5"
                  className="text-center mb-3 category-name text-dark"
                >
                  {review.name}
                </CardTitle>
                <CardText className="text-muted text-center">
                  {review.review}
                </CardText>
                <div className="text-center">
                  <Rating rating={review.rating} />
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Testimonials;
