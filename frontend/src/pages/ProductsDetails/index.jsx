import "./style.scss";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card} from 'react-bootstrap';
import { useCart } from "../../context/cart";
import { useParams } from "react-router-dom";
import api from '../../service/api';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import FooterDown from "../../components/footerdown";
import { payment, formatPrice } from "../../hooks/useUtil";
import { BsStarFill, BsStarHalf} from 'react-icons/bs'

const ProductsDetails =() =>{
    const cartContext = useCart();
    const [product, setProducts] = useState({});

    let {id} = useParams();

    useEffect(() => {
        api.get(`products/${id}`).then((res) =>{
            setProducts(res.data);
            console.log(product)
        })
        .catch((err) => console.log(err));
    }, []);

    function handlePutOnCart(e) {
        e.preventDefault();
        cartContext.insertInToCart(product);
        alert('Instrumento adicionado ao carrinho!')
    }

    return (
        <>
        <Header />
        <Container className="card-product">
            <Row className= "justify-content-between">
                <Col className="py-4 d-flex centralizar" sm={5} xs={8}>
                    <img className="img-fluid imagem-instrumento centralizar" src={product.image} alt=""/>
                </Col>
                <Col className="py-5 px-2 box-details" sm={5} xs={12}>
                  <h2 className="text-capitalize">{product.title}</h2>
                  <p className="m-0">
                      {product.description}
                  </p>

                  <p className="fw-bold fs-3 mt-2">{formatPrice(product.price)}</p>
                  <p className="product-info"> Disponível no estoque!</p>
                  <p className="product-info"> Divida em até 10x de {formatPrice(payment(product.price))}</p>
                  <div className="stars-container">
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarFill />
                        <BsStarHalf />
                  </div>
                <Button onclick={() => handlePutOnCart()} className="orange border-0 button-product-list" size="lg">Adicionar ao Carrinho</Button>
                </Col>
            </Row>
        </Container>
        <Footer />
        <FooterDown />
        </>
    );
};

export default ProductsDetails;