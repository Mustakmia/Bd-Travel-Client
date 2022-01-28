import React from 'react';
import { Carousel } from 'react-bootstrap';

const Clients = () => {
    return (
        <div>
            <Carousel fade className='clients'>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://image.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://image.freepik.com/free-photo/tourists-having-fun-coast_23-2147641179.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://image.freepik.com/free-photo/lost-tourists-finding-way_23-2147643219.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>4 slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src="https://img.freepik.com/free-photo/woman-with-backpack-exploring-nature_23-2148928007.jpg?size=338&ext=jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>5 slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://image.freepik.com/free-photo/two-male-hiker-sitting-top-rock-mountain-looking-scenic-view_23-2148182804.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>6 slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block "
                        src="https://img.freepik.com/free-photo/travelers-with-ma_23-2147641148.jpg?size=338&ext=jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>7 slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Clients;