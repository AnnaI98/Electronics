import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.desc}</Card.Text>
        <h5>€ {product.price}</h5>
        <Button as={Link} to={`/product/${product.id}`} variant="primary">
          Dettagli
        </Button>
      </Card.Body>
    </Card>
  );
}

