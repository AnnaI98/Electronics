import { Container, Row, Col } from "react-bootstrap";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">I nostri prodotti</h2>
      <Row>
        {products.map(p => (
          <Col key={p.id} xs={12} sm={6} md={4}>
            <ProductCard product={p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
