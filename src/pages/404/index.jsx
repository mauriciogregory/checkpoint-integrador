import { Container } from "react-bootstrap";
import './style.scss'

export default function Error404(){
    return(
        <>
           <Container>
            <div className="error-container">
                <h1 className="error-title">404 PAGE NOT FOUND!</h1>
                <p className="error-description">A página que você está procurando não existe! Clique <a href="http://localhost:3000/">aqui</a> para retornar a Home.
                Se você entrou nesta pagína por clicar em algun link, por favor, contate o administrador do sistema.</p>
            </div>
            </Container>
        </>
    )
}