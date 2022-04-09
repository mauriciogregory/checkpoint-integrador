import Header from '../../components/header';
import Footer from '../../components/footer';
import FooterDown from '../../components/footerdown';
// import api from '../../service/api';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Admin(){

    const [products, setProducts] = useState([])

    useEffect( () => {
        axios.get('http://localhost:8080/categories').then(resposta => {
            setProducts(resposta.data)
        })
    }, [])

        return(
        <section>
            <Header />
            <div>
                <ul>
                {products.map( produto => {

                    return(
                        
                        // <li key={produto.title}>
                        //     <strong>{produto.title}</strong>
                        //     <p>{}</p>
                        // </li>
                        
                        <li key={produto.nome}>
                            <strong>{produto.nome}</strong>
                            <p>{}</p>
                        </li>
                        
                    )
                }
                    )}
                </ul>
            </div>
            <Footer />
            <FooterDown />
        </section>
    );
    }


export default Admin;
