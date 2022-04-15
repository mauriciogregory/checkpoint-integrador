import './style.scss';
import { Card, Button, Container } from 'react-bootstrap';
import { useState, useEffect} from 'react'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from '../../service/api';
import { GrCart } from 'react-icons/gr';
import { formatPrice } from '../../hooks/useUtil';

export default function CarouselComponent(){

    const [products, setProducts] = useState([]); 

    useEffect(() => {
      getApiData()
    }, [])

    const getApiData = async () => {
      try{
        const { data } = await api.get('/products?page=1');
        console.log(data.content)
        setProducts(data.content);
      }
      catch (error){
        console.log(error)
      }
    }

    const settings = { //configurações do slider
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
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              },
            },
          ],
        };
      return (
        <div className="mt-4 mb-1 d-flex align-items-center">
        <Container className='cont-carousel'>
        <Slider {...settings}>
                {products.map( ( {id, title, description, price, image } ) => (
                    <div className="cards">
                    <Card key={id} className="card-carousel" style={{ width: '21rem' }}>
                        <Card.Img className="card-img" variant="top" src={image} alt={description} />
                        <Card.Body>
                            <Card.Title className='card-title'>{title}</Card.Title>
                            <Card.Text className='card-text'>
                             {formatPrice(price)}
                            </Card.Text>
                            <Button className="card-buy-button">{<GrCart/>}</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))}
            </Slider>
          </Container>
        </div>
      );
    }
