import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';

class MyCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <a href='https://github.com/SamuelZambrana'>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://github.com/SamuelZambrana'>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://github.com/SamuelZambrana'>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://github.com/SamuelZambrana'>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt=''
                        />
                    </a>
                </Carousel.Item>
            </Carousel>

        );
    }
}

export default MyCarousel;
