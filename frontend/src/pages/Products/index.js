import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
import DisplayProduct from "../../components/displayProducts";
import { Container, Row, Col } from 'react-bootstrap'
// import api from '../../service/api';
import { useEffect, useState } from "react";
import axios from "axios";

// estilos
import './styles.scss';


const Products = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/products").then((resposta) => {
      setProducts(resposta.data);
    });
  }, []);

  return (
    <>
      <Header />
      <Container  className="product-container">
        <Row>
          {products.map((product) => (
            <Col lg={3} md={4} sm={6} xs={12}>
              <DisplayProduct data={product} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
      <FooterDown />
    </>
  );
}

export default Products;
