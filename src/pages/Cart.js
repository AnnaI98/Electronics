import { useState } from "react";
import { Container, Table, Button, Form, Row, Col, Alert, Image, Card } from "react-bootstrap";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState("");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setError("");
  };

  const handleQuantityChange = (id, value) => {
    if (value < 1 || isNaN(value)) return;
    updateQuantity(id, value);
  };

  const handleCheckout = () => {
    if (!paymentMethod) {
      setError("Seleziona un metodo di pagamento.");
      return;
    }
    setError("");
    alert(`Procedi con il pagamento tramite: ${paymentMethod}`);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: "1000px" }}>
      <h2 className="mb-4 fw-bold text-center text-md-start">🛒 Il tuo carrello</h2>

      {cart.length === 0 ? (
        <p className="text-center fs-5 text-muted">Il carrello è vuoto.</p>
      ) : (
        <>
          <Table
            bordered
            hover
            responsive
            className="align-middle text-center shadow-sm"
          >
            <thead className="table-dark">
              <tr>
                <th className="text-start">Prodotto</th>
                <th>Prezzo</th>
                <th style={{ minWidth: "130px" }}>Quantità</th>
                <th>Subtotale</th>
                <th aria-label="Rimuovi prodotto"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="text-start d-flex align-items-center gap-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                      rounded
                    />
                    <span>{item.name}</span>
                  </td>
                  <td>€ {item.price.toFixed(2)}</td>
                  <td>
                    <div className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </Button>
                      <Form.Control
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value))
                        }
                        style={{
                          width: "60px",
                          textAlign: "center",
                          margin: "0 6px",
                        }}
                      />
                      <Button
                        variant="light"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td className="fw-semibold">
                    € {(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          
          <Card className="mt-4 shadow-sm border-0">
            <Card.Body>
              <Row className="align-items-center g-3">
                <Col md={6}>
                  <Form.Group controlId="paymentMethod">
                    <Form.Label className="fw-semibold">Metodo di pagamento</Form.Label>
                    <Form.Select value={paymentMethod} onChange={handlePaymentChange}>
                      <option value="">Seleziona un metodo di pagamento</option>
                      <option value="carta_di_credito">Carta di credito</option>
                      <option value="paypal">PayPal</option>
                      <option value="bonifico">Bonifico bancario</option>
                      <option value="contrassegno">Pagamento alla consegna</option>
                    </Form.Select>
                  </Form.Group>
                  {error && (
                    <Alert
                      variant="danger"
                      onClose={() => setError("")}
                      dismissible
                      className="mt-3 py-2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {error}
                    </Alert>
                  )}
                </Col>

                <Col
                  md={6}
                  className="d-flex flex-column flex-md-row align-items-center justify-content-md-end gap-3"
                >
                  <div className="fw-bold fs-5">
                    Totale: € {getTotal().toFixed(2)}
                  </div>
                  <Button
                    onClick={handleCheckout}
                    size="lg"
                    className="px-4"
                  >
                    Procedi al pagamento
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </>
      )}
    </Container>
  );
}

