import './style.css'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Container, Row, Col} from 'react-bootstrap'
import IconsList from '../icons/index';

export default function Footer(){
    return (
        <div className="footer">
            <Container fluid="md">
            <Row>
                <Col sm>
                    <h1>Music Store</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adiplorem lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit</p>
                </Col>
                 <Col xs>
                    <h1>Featured</h1>
                    <Col>Guitarras</Col>
                    <Col>Ukuleles</Col>
                    <Col>Cavacos</Col>
                    <Col>Bateria</Col>
                </Col>
                <Col xs>
                    <h1>Contate-nos</h1>
                    <Col>Endereço:</Col>
                    <p>Nome da Rua, 992, Cidade, MG</p>
                    <Col>Telefone:</Col>
                    <p>00-999932399</p>
                    <Col>Email:</Col>
                    <p>musicstore@example.com</p>
                </Col>
            </Row>
            <div className="icons-list">
                <ul className="footer-medias">
                   <IconsList site="https://www.linkedin.com/in/vin%C3%ADcius-alexandre-850b63219/" icon={<FaLinkedin/>}/>
                   <IconsList site="https://discord.com/channels/@me" icon={<FaFacebook/>} />
                   <IconsList site="https://viniTWLgithub.com/" icon={<FaInstagram/>}/>
               </ul>
            </div>
                </Container>
      </div>
    );

}