import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // BOOTSTRAP
import './style.scss';
import { GrCart } from 'react-icons/gr';
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

export default function Header(){
    return(
    <header>
        <Navbar className="header-nav"collapseOnSelect expand="lg" variant="light">
                <Navbar.Brand>
                <img alt="logo" className="logo" src={Logo}></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav className="nav-list">
                        <Link to={"/"}>
                            <Nav.Item className="list-header">Home</Nav.Item>
                        </Link>
                        <Link to={"/products"}>
                            <Nav.Item className="list-header">Produtos</Nav.Item>
                        </Link>
                        <Link to={"/about"}>
                            <Nav.Item className="list-header">Sobre nós</Nav.Item>
                        </Link>
                        <Link to={"/admin"}>
                            <Nav.Item className="list-header">Administração</Nav.Item>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to={"/cart"}>
                            <Nav.Item className="cart-header">{<GrCart/>}</Nav.Item>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    </header>
      
    )
}