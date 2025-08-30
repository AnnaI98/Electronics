import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Laptop() {
  const [search, setSearch] = useState("");
  const laptops = products.filter(p => 
    p.category === "laptop" && 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Laptop</h2>

      
      <Form.Control
        type="text"
        placeholder="Cerca un laptop..."
        className="mb-4"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <Row>
        {laptops.length > 0 ? (
          laptops.map(product => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))
        ) : (
          <p className="text-center">❌ Nessun laptop trovato.</p>
        )}
      </Row>
    </Container>
  );
}

