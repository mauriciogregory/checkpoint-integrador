import './style.scss';
import { Carousel, Card, Button, CardGroup, Container } from 'react-bootstrap';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCarousel from '../cardCarousel';

export default function CarouselComponent(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              },
            },
          ],
        };
      return (
          
        <div className="mt-4 mb-1 d-flex align-items-center text-uppercase fw-bold">
        <Container className='cont-carousel'>
            <Slider {...settings}>
                <CardCarousel/>
                <CardCarousel/>
                <CardCarousel/>
                <CardCarousel/>
                <CardCarousel/>
                <CardCarousel/>
                <CardCarousel/>
            </Slider>
          </Container>
        </div>
      );
    }
