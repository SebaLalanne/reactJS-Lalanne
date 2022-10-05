import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './CartWidget.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
       <Navbar bg="dark" variant="dark">
           <Container>
               <Navbar.Brand as={Link} to='/'>
                   Tienda de Mascotas
                </Navbar.Brand>
                <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>
                Home
            </Nav.Link>
            <Nav.Link as={Link} to='/category/alimentos' >Alimentos</Nav.Link>
            <Nav.Link as={Link} to='/category/accesorios' >Accesorios</Nav.Link>
            <Nav.Link as={Link} to='/category/contacto' >Contacto</Nav.Link>
          </Nav>
          <CartWidget />
         </Container>
       </Navbar>
    )
}

export default NavBar;
