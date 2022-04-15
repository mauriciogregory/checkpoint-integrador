import "./style.scss";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button} from 'react-bootstrap';
import axios from "axios";
import { useCart } from "../../contexts/CartContext";
import { useParams } from "react-router-dom";

const ProductsDetails =() =>{
    const cartContext = useCart();
    const [product, setProducts] = useState({});

    let {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`).then((res) =>{
            setProducts(res.data);
        })
        .catch((err) => console.log(err));
    }, []);

    function handlePutOnCart(e) {
        e.preventDefault()
        cartContext.insertInToCart(product);
        alert('Instrumento adiciona ao carrinho!')
    }

    return (
        <Container className="card">
            <Row className= "justify-content-between">
                <Col className="py-4 d-flex centralizar" sm={5} xs={8}>
                    <img className="img-fluid imagem-instrumento centralizar" src={product.image} alt=""/>
                </Col>
                <Col className="py-5 px-2" sm={5} xs={12}>
                  <h2 className="text-capitalize">{product.title}</h2>
                  <p className="m-0">
                      {product.description}
                  </p>

                  <p className="fw-bold fs-3 mt-2">R$ {product.price}</p>
                <Button onclick={handlePutOnCart} className="orange border-0" size="lg">Adicionar ao Carrindo</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductsDetails;