import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // BOOTSTRAP
import './style.css';
import { GrCart } from 'react-icons/gr';
import Logo from '../../assets/img/logo.png'

export default function Header(){
    return(
    <header fixed="top">
        <Navbar className="header-nav"collapseOnSelect expand="lg" bg="light" variant="light">
            <Container fluid>
                <Navbar.Brand>
                <img alt="logo" className="logo" src={Logo}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="nav-list">
                        <Nav.Link className="list-header">Home</Nav.Link>
                        <Nav.Link className="list-header">Produtos</Nav.Link>
                        <Nav.Link  className="list-header">Sobre Nós</Nav.Link>
                        <Nav.Link className="list-header">Administração</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link className="cart-header">{<GrCart/>}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
      
    )
}