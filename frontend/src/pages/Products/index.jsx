import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
import api from '../../service/api';
import { useEffect, useState } from "react";
import { useCart } from "../../context/cart";
import { Button, Card } from "react-bootstrap";
import { formatPrice } from "../../hooks/useUtil";
import { Link } from "react-router-dom"; 

// estilos
import './styles.scss';

export default function Products() {

  const cartContext = useCart();

  const [products, setProducts] = useState([]);

   useEffect(() => {
    getApiData()
    }, []); 

  const getApiData = async () => {
    try{
      const { data } = await api.get('/products?&size=20');
      console.log(data.content)
      setProducts(data.content);
    }
    catch (error){
      console.log(error)
    }
  }

  function handlePutOnCart(e) {
    e.preventDefault()
    cartContext.insertInToCart(products);
    alert('Instrumento adicionado ao carrinho!')
}

const test = () => {
}

  return (
    <section>
      <Header />
      <div>
        <ul className="grid-produtos">
          {products.map(( {id, title, image, description, price}) => {
            return (
              <Link className="unstyle" to={`/products/${id}`}>
              <li key={id} className="li-card" onClick={() => test()} >
              <Card data-aos="flip-up" data-aos-offset="150" className="product-list-item">
                  <Card.Img className="img-product-list" variant="top" src={image} />
                  <Card.Body>
                  <Card.Title className="title-product-list">{title}</Card.Title>
                  <Card.Text className="description-product-list">
                     {description}
                  </Card.Text>
                  <p className="price-product-list">{formatPrice(price)}</p>
                  <Button onclick={handlePutOnCart} className="orange border-0 button-product-list" size="lg">Adicionar ao Carrinho</Button>
                  </Card.Body>
              </Card>
              </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <Footer />
      <FooterDown />
    </section>
  );
}
