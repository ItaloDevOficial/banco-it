import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import n1 from '../img/n1.jpg'
import n2 from '../img/n2.jpg'
import n3 from '../img/n3.jpg'
import n4 from '../img/n4.jpg'
import n5 from '../img/n5.jpg'

const MyCarousel = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true}>
            <div>
                <img src={n1} alt="image1" />
            </div>
            <div>
                <img src={n2} alt="image2" />
            </div>
            <div>
                <img src={n3} alt="image3" />
            </div>
            <div>
                <img src={n4} alt="image3" />
            </div>
            <div>
                <img src={n5} alt="image3" />
            </div>
        </Carousel>
    );
};

export default MyCarousel;