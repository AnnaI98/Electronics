import { Container, Table, Button } from "react-bootstrap";

export default function Cart() {
  // Per ora mock
  const cart = [
    { id: 1, name: "Laptop Gaming", price: 1200, qty: 1 }
  ];

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <Container className="mt-4">
      <h2>Il tuo carrello</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Prodotto</th>
            <th>Quantità</th>
            <th>Prezzo</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>€ {item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Totale: € {total}</h4>
      <Button variant="primary">Procedi all'acquisto</Button>
    </Container>
  );
}
