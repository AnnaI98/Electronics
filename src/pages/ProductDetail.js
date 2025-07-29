import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import products from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Prodotto non trovato</h2>;

  return (
    <Container className="mt-4">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} className="img-fluid mb-3"/>
      <p>{product.desc}</p>
      <h4>€ {product.price}</h4>
      <Button variant="success">Aggiungi al carrello</Button>
    </Container>
  );
}
