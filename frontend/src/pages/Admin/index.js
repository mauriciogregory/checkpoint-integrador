import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
import api from "../../service/api";
import { useEffect, useState } from "react";
// util
import { formatPrice } from "../../hooks/useUtil";
import Modal from "react-modal";

// styles
import "./style.scss";
import { Link } from "react-router-dom";

export default function Admin() {
  const [products, setProducts] = useState([]);
  // const [modal, setModalVisible] = useState(false);

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

  const deleteProduct = (id) => {
    api.delete(`/products/${id}`).then(() => alert("Deletado com sucesso!"));
  };

  // post
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ID, setId] = useState("");

  // function editar(id) {
  //   api
  //     .put(`/products/${id}`, {
  //       title,
  //       description,
  //       price,
  //       image,
  //     })
  //     .then((res) => res.data);
  // }

  function handleSubmitPost(event) {
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

  Modal.setAppElement("#root");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      width: "30rem",
      height: "40rem",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      overlay: {
        background: "rgba(0,0,0,0.2)",
      },
    },
  };

  const [visibleModal, setModalVisible] = useState(false);

  function handleSubmitPut(event) {
    event.preventDefault();
    api
      .put(`/products/${ID}`, {
        title,
        description,
        price,
        image,
      })
      .then((res) => res.data);
  }

  return (
    <section>
      <Header />

      <Modal
        className={"card"}
        style={customStyles}
        isOpen={visibleModal}
        onRequestClose={() => setModalVisible(false)}
      >
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmitPut}>
          {/* {let id = event.target.value} */}
          {/* <input placeholder="Title" />
          <input placeholder="Description" />
          <input placeholder="Price" />
          <input placeholder="URL da Imagem" /> */}
          <div className="modal-inputs">

          <div>
            <label htmlFor="id">ID:</label>
            <input
              name="id"
              type="number"
              value={ID}
              onChange={(event) => setId(event.target.value)}
              />
          </div>
          <div>
            <label htmlFor="Title">Title:</label>

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
          <div className="botoes">
            <button className="button-product-list-adicionar secondary" type="submit">Salvar</button>
            <button className="button-product-list-adicionar secondary" type="button" onClick={() => setModalVisible(false)}>
              Cancelar
            </button>
          </div>
        </div>
        </form>
      </Modal>

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
                      className="button-product-list danger"
                      onChange={(event) => setId(event.target.value)}
                      onClick={() => {
                        setModalVisible(true);
                      }}
                    >
                      Novo Cadastro
                    </button>
                    <button
                      className="button-product-list danger"
                      onClick={() => deleteProduct(id)}
                    >
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
      <div className="adicionar-produto">
        <h3>Adicionar Novo Produto ao Banco de Dados:</h3>
        <div>
          <form onSubmit={handleSubmitPost} className="formulario">
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

            <div className="container-botao">
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
