import { Carousel } from 'react-bootstrap';
import React from 'react';
import { useLocation } from 'react-router-dom';

const Carousell = () => {
    const location = useLocation();

    // Kiểm tra nếu không phải đường dẫn '/' thì không hiển thị Carousel
    if (location.pathname !== '/') {
        return null;
    }

    return (
        <Carousel style={{ marginBottom: 30 }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/image3.jpg'}
                    alt="First slide"
                    style={{ height: 300 }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/image4.jpg'}
                    alt="Second slide"
                    style={{ height: 300 }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/image2.jpg'}
                    alt="Third slide"
                    style={{ height: 300 }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + '/image1.jpg'}
                    alt="Fourth slide"
                    style={{ height: 300 }}
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carousell;
