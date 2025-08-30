import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Offerte() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const offerte = products.filter(p => p.discount > 0);

  const handleBuy = (product) => {
    addToCart(product, 1); 
    navigate("/cart"); 
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5 fw-bold" style={{ fontSize: "2rem", color: "#d32f2f" }}>
        🎉 Offerte speciali
      </h2>

      <Row className="g-4">
        {offerte.length > 0 ? (
          offerte.map(product => {
            const discountedPrice = (product.price - product.discount).toFixed(2);
            const discountPercent = Math.round((product.discount / product.price) * 100);

            return (
              <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card className="h-100 shadow-sm border-0">
                  <div style={{ position: "relative" }}>
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <Badge
                      bg="danger"
                      style={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        fontSize: "0.9rem",
                        padding: "0.4em 0.6em",
                      }}
                    >
                      -{discountPercent}%
                    </Badge>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="mb-2" style={{ fontSize: "1.1rem" }}>
                      {product.name}
                    </Card.Title>
                    <Card.Text className="mb-3" style={{ fontSize: "0.9rem", color: "#555" }}>
                      {product.desc}
                    </Card.Text>
                    <div className="mt-auto">
                      <div className="mb-2">
                        <span className="text-muted text-decoration-line-through">
                          € {product.price.toFixed(2)}
                        </span>
                        <span className="fw-bold ms-2 text-danger">
                          € {discountedPrice}
                        </span>
                      </div>
                      <Button
                        variant="primary"
                        className="w-100"
                        onClick={() => handleBuy(product)}
                      >
                        Acquista
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <p className="text-center fs-5">Al momento non ci sono offerte disponibili.</p>
        )}
      </Row>
    </Container>
  );
}

