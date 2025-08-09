import { Container, Row, Col } from "react-bootstrap";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Laptop() {
  const laptops = products.filter(p => p.category === "laptop");

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Laptop</h2>
      <Row>
        {laptops.length > 0 ? (
          laptops.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <p className="text-center">Al momento non ci sono laptop disponibili.</p>
        )}
      </Row>
    </Container>
  );
}
