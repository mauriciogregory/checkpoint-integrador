/* import Header from "../../components/header";
import Footer from "../../components/footer";
import FooterDown from "../../components/footerdown";
import api from '../../service/api';
import { useEffect, useState } from "react";


// estilos
import './styles.scss';


export default function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApiData()
    }, []); 

  const getApiData = async () => {
    try{
      const { data } = await api.get('/products');
      console.log(data.content)
      setProducts(data.content);
    }
    catch (error){
      console.log(error)
    }
  }

  return (
    <section>
      <Header />
      <div>
        <ul className="grid-produtos">
          {products.map((produto) => {
            return (
              <li key={produto.id} className="produto-card">
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
*/