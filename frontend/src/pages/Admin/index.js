import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
import api from '../../service/api';
import { useEffect, useState } from "react";
import "./style.scss";

export default function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getapiData()
  }, []);


  const getapiData = async () => {
      const {data} = await api.get("/products?&size=1000");
      setProducts(data.content);
  }

  return (
    <section>
      <Header />
      <div className="container">
        <ul className="grid-produtos">
          {products.map((produto) => {
            return (
              <li key={produto.id} className="li-card">
                <ul className="product-list-item">
                  <li className="card-titulo">
                    <strong>{produto.title}</strong>
                  </li>
                  <li>
                    <p>Descrição do Produto: {produto.description}</p>
                  </li>
                  <li>
                    <img src={produto.image} className="img-product-list" variant="top"/>
                  </li>
                  <li>
                    <p>Preço R$: {produto.price}</p>
                  </li>
                  <div className="botoes">
                  <li>
                    <button className="button-product-list">Editar</button>
                  </li>
                  <li>
                    <button className="button-product-list">Excluir</button>
                  </li>
                  </div>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
      <FooterDown />
    </section>
  );
}
