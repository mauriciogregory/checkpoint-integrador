import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
import api from "../../service/api";
import { useEffect, useState } from "react";

// util
import { formatPrice } from "../../hooks/useUtil";
import { Form, Formik, Field } from "formik";
import Modal from "../../components/Modal";

// styles
import "./style.scss";

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [modal, setModalVisible] = useState(false);

  useEffect(() => {
    getapiData();
  }, []);

  // get
  const getapiData = async () => {
    const { data } = await api.get("/products?&size=100");
    setProducts(data.content);
  };

  // delete
  const [status, setStatus] = useState(null);

  useEffect(() => {
    deleteProduct();
  }, []);

  const deleteProduct = (id) => {
    api.delete(`/products/${id}`).then(() => alert("Deletado com sucesso!"));
  };

  //put
  const newProduct = {
    title: "Novo",
    description: "novo",
    price: 23.33,
    image: "",
  };

  // post
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  // const addNewProduct = () => {
  //   api.post(`/products/`, newProduct).then((response) => response.data);
  //   alert("Adicionado com Sucesso!");
  // };

  function editar(id) {
    api
      .put(`/products/${id}`, {
        title,
        description,
        price,
        image,
      })
      .then((res) => res.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    api
      .post(`/products/`, {
        title,
        description,
        price,
        image,
      })
      .then((response) => response.data);
    alert("Adicionado com Sucesso!");
  }

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
                    <button
                      className="button-product-list"
                      onClick={() => setModalVisible(true)}
                    >
                       Editar Produto
                    </button>


                    <button className="button-product-list danger">
                      Excluir
                    </button>
                  </div>
                </ul>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Form adicionar novos produtos */}
      <div className="botao-adicionar">
        <div className="formulario">
          <h3>Adicionar Novo Produto ao Banco de Dados:</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title:</label>
              <input
                name="title"
                id="title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <input
                id="description"
                name="description"
                type="text"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                name="price"
                type={formatPrice("text")}
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image">Imagem :</label>
              <input
                id="image"
                name="image"
                type="text"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </div>

            <div>
              <button className="button-product-list-adicionar" type="submit">
                Adicionar Novo Produto
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
      <FooterDown />
    </section>
  );
}
