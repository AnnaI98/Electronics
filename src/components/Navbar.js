import { Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Badge } from "react-bootstrap";
import { useCart } from "../context/CartContext";
import { Cart, Laptop, Phone, Headphones, Usb } from "react-bootstrap-icons";

export default function NavBar() {
  const { cart } = useCart();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="shadow-sm py-2">
      <Container>
        
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 text-warning"
        >
          ElectroShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-2">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              Home
            </Nav.Link>

            
            <NavDropdown title="Categorie" id="categories-dropdown">
              <NavDropdown.Item as={Link} to="/smartphone">
                <Phone size={16} className="me-2" /> Smartphone
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/laptop">
                <Laptop size={16} className="me-2" /> Laptop
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/audio">
                <Headphones size={16} className="me-2" /> Audio
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/accessori">
                <Usb size={16} className="me-2" /> Accessori
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/offerte" className="nav-link-custom">
              Offerte
            </Nav.Link>
            <Nav.Link as={Link} to="/chi-siamo" className="nav-link-custom">
              Chi siamo
            </Nav.Link>
            <Nav.Link as={Link} to="/contatti" className="nav-link-custom">
              Contatti
            </Nav.Link>

            
            <Nav.Link
              as={Link}
              to="/cart"
              className="position-relative nav-link-custom"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Cart size={22} />
              {cart.length > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {cart.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

     
      <style>{`
        .nav-link-custom {
          transition: color 0.2s ease;
        }
        .nav-link-custom:hover {
          color: #facc15 !important;
        }
      `}</style>
    </Navbar>
  );
}

