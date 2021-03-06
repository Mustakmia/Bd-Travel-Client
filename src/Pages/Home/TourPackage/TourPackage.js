import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './TourPackage'

const TourPackage = () => {

  const [packages, setPakages] = useState([])

  useEffect(() => {
    fetch('http://localhost:7000/card')
      .then(res => res.json())
      .then(data => setPakages(data))
  }, [])


  return (
    <>
      {

        (packages.length !== 0) ? <div className="my-5">
          <h1 className="text-danger">World <span>Best Review</span></h1>
          <div className="tour-card">
            <Container>
              <Row xs={1} md={3} className="g-4">
                {
                  packages.map(pack => <Col key={"id"}>
                    <Card style={{ border: ' 3px solid tomato' }}>
                      <Card.Img
                        style={{ height: '220px' }}
                        variant="top"
                        src={pack.img}
                      />
                      <Card.Body className="bg-dark text-light">
                        <Card.Title>{pack.name}</Card.Title>
                        <Card.Text>Population:{pack.population}</Card.Text>
                        <Card.Text>Tour Price:{pack.price}</Card.Text>
                        <Card.Text>Time:{pack.time}</Card.Text>
                        <Card.Text>Country:{pack.country}</Card.Text>
                        <Link to={`/selected/${pack._id}`}><button className="btn mx-1 bg-warning text-white ">
                          Book Now
                        </button></Link>
                      </Card.Body>

                    </Card>
                  </Col>)
                }
              </Row>
            </Container>
          </div>
        </div> : <h1>Loading...</h1>
      }

    </>

  );
};

export default TourPackage;
