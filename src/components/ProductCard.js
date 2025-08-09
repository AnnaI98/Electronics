import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

 
  const truncateText = (text, max = 100) =>
    text.length > max ? text.substring(0, max) + "..." : text;

  return (
    <Card className="mb-4 shadow-sm rounded-3">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="img-fluid rounded-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title className="text-primary fw-semibold">{product.name}</Card.Title>
        <Card.Text className="text-muted">{truncateText(product.desc)}</Card.Text>
        <h5 className="text-success">€ {product.price.toFixed(2)}</h5>
        <div className="d-flex justify-content-between">
          <Button
            as={Link}
            to={`/product/${product.id}`}
            variant="outline-primary"
            className="rounded-pill"
          >
            Dettagli
          </Button>
          <Button
            onClick={() => addToCart(product)}
            variant="success"
            className="rounded-pill"
          >
            🛒 Aggiungi
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}



