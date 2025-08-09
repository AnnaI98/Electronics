import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#222", color: "#ccc" }}
      className="py-3 mt-auto"
    >
      <Container className="text-center">
        <small>&copy; 2025 ElectroShop. Tutti i diritti riservati.</small>
      </Container>
    </footer>
  );
}


