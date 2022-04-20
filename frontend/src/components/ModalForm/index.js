import { Formik, Form, Field } from "formik";

import "./index.scss";

export default function ModalForm() {
  return (
    
<div className="botao-adicionar">
        <div>
          <h1>Editar Campos:</h1>
          <Formik>
            {() => (
              <Form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="title">Title:</label>
                  <Field
                    name="title"
                    id="title"
                    type="text"
                    value={title}
                    onChange={setTitle((event) => event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="description">Description:</label>
                  <Field
                    id="description"
                    name="description"
                    type="text"
                    value={description}
                    onChange={setDescription((event) => event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price:</label>
                  <Field
                    id="price"
                    name="price"
                    type="decimal"
                    value={price}
                    onChange={setPrice((event) => event.target.price)}
                  />
                </div>
                <div>
                  <label htmlFor="image">Imagem :</label>
                  <Field
                    id="image"
                    name="image"
                    type="text"
                    value={image}
                    onChange={setImage((event) => event.target.value)}
                  />
                </div>

                <div>
                  <button
                    className="button-product-list-adicionar"
                    type="submit"
                  >
                    Adicionar Novo Produto
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
    </div>
  );
}
