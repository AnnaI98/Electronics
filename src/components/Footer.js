import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <Container>
        <p>© {new Date().getFullYear()} ElectroShop - Tutti i diritti riservati</p>
      </Container>
    </footer>
  );
}

