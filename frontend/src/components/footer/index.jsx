import './style.css'
import { FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Container, Row, Col} from 'react-bootstrap'

export default function Footer(){
    return (
        <footer className="footer">
            <Container fluid="md">
            <Row>
                <Col sm>
                    <h1>Music Store</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adiplorem lorem ipsum dolor sit amet lorem ipsum dolor sit amet aksjdkasjdkasjdkasjdkdajskldhajksdh</p>
                </Col>
                 <Col sm>
                    <h1>Featured</h1>
                    <Col>Guitarras</Col>
                    <Col>Ukuleles</Col>
                    <Col>Cavacos</Col>
                    <Col>Bateria</Col>
                </Col>
                <Col sm>
                    <h1>Contate-nos</h1>
                    <Col>Endereço</Col>
                    <p>Rua Sei la oq</p>
                    <Col>Telefone</Col>
                    <p>00-999932399</p>
                    <Col>Email</Col>
                    <p>musicstore@example.com</p>
                </Col>
            </Row>
                </Container>
      </footer>
    );

}