import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
// import api from '../../service/api';
import { useEffect, useState } from "react";
import axios from "axios";

// estilos
import './styles.scss';


export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products").then((resposta) => {
      setProducts(resposta.data);
    });
  }, []);

  return (
    <section>
      <Header />
      <div>
        <ul className="grid-produtos">
          {products.map((produto) => {
            return (
              <li key={produto.title} className="produto-card">
                <ul>
                  <li>
                    <strong>{produto.title}</strong>
                  </li>
                  <li>
                    <img src={produto.image} heigth={50} width={100} />
                  </li>
                  <li>
                    <p>Descrição do Produto: {produto.description}</p>
                  </li>
                  <li>
                    <p>Preço R$: {produto.price}</p>
                  </li>
                </ul>
              </li>

              //   <li key={produto.nome}>
              //     <strong>{produto.nome}</strong>
              //   </li>
            );
          })}
        </ul>
      </div>
      <Footer />
      <FooterDown />
    </section>
  );
}
