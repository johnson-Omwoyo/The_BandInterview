import { useEffect, useState } from "react";
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

const Rating = ({ rating = 0 }: { rating: number }) => {
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

interface Review {
  name: string;
  review: string;
  rating: number;
}

const Testimonials = () => {
  const baseUrl =
    "https://gist.githubusercontent.com/johnson-Omwoyo/6ee07928734d5a3f56f996cc1f6d3cd3/raw/4a25295ee4550f42a7292700da8bde822489f94d/clickkcart.json";
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${baseUrl}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        setReviews(data.testmonials[0]);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <Container className="testimonials my-5">
      <h2 className="text-center mb-4 category-name text-dark">Testimonials</h2>
      <Row>
        {reviews.length === 0 ? (
          <div className="col-12 text-center">
            <p>No testimonials available.</p>
          </div>
        ) : (
          reviews.map((review, index) => (
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
          ))
        )}
      </Row>
    </Container>
  );
};

export default Testimonials;
