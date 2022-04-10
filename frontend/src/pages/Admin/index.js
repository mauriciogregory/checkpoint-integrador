import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
// import api from '../../service/api';
import { useEffect, useState } from "react";
import axios from "axios";

export default function Admin() {
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
        <ul>
          {products.map((produto) => {
            return (
              <li key={produto.title}>
                <ul>
                  <li>
                    <strong>{produto.title}</strong>
                  </li>
                  <li>
                    <p>Descrição do Produto: {produto.description}</p>
                  </li>
                  <li>
                    <p>Preço R$: {produto.price}</p>
                  </li>
                  <li>
                    <img src={produto.image} heigth={50} width={100}/>
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
