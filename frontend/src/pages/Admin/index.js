import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
import api from "../../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// util
import { formatPrice } from "../../hooks/useUtil";

// styles
import "./style.scss";

export default function Admin() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getapiData();
    // deleteData();
  }, []);

  // get
  const getapiData = async () => {
    const { data } = await api.get("/products?&size=1000");
    setProducts(data.content);
  };

  // delete
  // async function deleteData(id) {
  //   await api.delete(`/products/${id}`)
  //   console.log(id)
  // }

  //put
  const newProduct = {
    title: "Novo",
    description: "novo",
    price: 23.33,
    image: "",
    categories: [],
  };

  //post
  // function addNewProduct() {
  //   api
  //     .post("/products/", newProduct)
  //     .then((res) => {
  //       res.data;
  //     })
  //     .catch((error) => console.log(error));
  // }

  return (
    <section>
      <Header />
      <div className="container-fluid ">
        <ul className="grid-produtos">
          {products.map(({ id, title, description, price, image }) => {
            return (
              <li key={id} className="li-card">
                <ul className="product-list-item">
                  <li className="card-title">
                    <strong>{title}</strong>
                  </li>
                  <li className="card-description-min">
                    <p>Descrição do Produto: {description}</p>
                  </li>
                  <li>
                    <img
                      src={image}
                      className="card-img"
                      variant="top"
                      alt="imagem"
                    />
                  </li>
                  <li className="">
                    <p>Preço: {formatPrice(price)}</p>
                  </li>
                  <div className="botoes">
                    <li>
                      <button className="button-product-list">Editar</button>
                    </li>
                    <li>
                      {/* <Link className="unstyle"  to={(`/products/${id}`)}> */}
                      <button
                        className="button-product-list"
                      >
                        Excluir
                      </button>
                      {/* </Link> */}
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
