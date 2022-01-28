import React from "react";
import "./Services.css"
import { Card, CardGroup, } from "react-bootstrap";

const Services = () => {
  return (
    <div>
      <h1>Our Best Services</h1>
      <CardGroup>
        <Card className="service-pic">
          <Card.Img className="service-pic" variant="top" src="https://image.freepik.com/free-vector/destination-concept-international-travel-journey-red-pointer-with-grey-world-map-inside_333792-53.jpg" />
          <Card.Body>
            <Card.Title>Best Location</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="service-pic">
          <Card.Img className="service-pic" variant="top" src="https://image.flaticon.com/icons/png/512/546/546423.png" />
          <Card.Body>
            <Card.Title>Save Money</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to additional
              content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="service-pic">
          <Card.Img className="service-pic" variant="top" src="https://image.freepik.com/free-vector/bow-tie-tuxedo-utensil-restaurant-logo_57043-22.jpg" />
          <Card.Body>
            <Card.Title>Best Hotel & Food</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="service-pic">
          <Card.Img className="service-pic" variant="top" src="https://image.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg" />
          <Card.Body>
            <Card.Title>Shopping</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Services;


