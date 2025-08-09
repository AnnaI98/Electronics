import { Container, Row, Col } from "react-bootstrap";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Offerte() {
  const offerte = products.filter(p => p.discount > 0);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Offerte speciali</h2>
      <Row>
        {offerte.length > 0 ? (
          offerte.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <p className="text-center">Al momento non ci sono offerte disponibili.</p>
        )}
      </Row>
    </Container>
  );
}
