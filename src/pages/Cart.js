import { useState } from "react";
import { Container, Table, Button, Form, Row, Col, Alert } from "react-bootstrap";
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
    <Container className="mt-5" style={{ maxWidth: "800px" }}>
      <h2 className="mb-4 fw-bold text-center text-md-start" style={{ fontSize: "1.5rem" }}>
        Il tuo carrello
      </h2>

      {cart.length === 0 ? (
        <p className="text-center fs-5 text-muted">Il carrello è vuoto.</p>
      ) : (
        <>
          <Table
            striped
            bordered
            hover
            responsive
            className="align-middle text-center"
            style={{ fontSize: "1rem" }}
          >
            <thead>
              <tr>
                <th className="text-start">Prodotto</th>
                <th>Prezzo</th>
                <th style={{ minWidth: "90px" }}>Quantità</th>
                <th>Subtotale</th>
                <th aria-label="Rimuovi prodotto"></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="text-start">{item.name}</td>
                  <td>€ {item.price.toFixed(2)}</td>
                  <td>
                    <Form.Control
                      type="number"
                      min="1"
                      value={item.quantity}
                      aria-label={`Quantità per ${item.name}`}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      style={{ maxWidth: "80px", margin: "0 auto" }}
                      size="md"
                    />
                  </td>
                  <td>€ {(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      aria-label={`Rimuovi ${item.name} dal carrello`}
                      onClick={() => removeFromCart(item.id)}
                      title={`Rimuovi ${item.name}`}
                      style={{ fontWeight: "600" }}
                    >
                      ×
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Row
            className="align-items-center mt-4 p-3 border rounded"
            style={{ backgroundColor: "#f8f9fa", gap: "1rem" }}
          >
            <Col xs={12} md={6}>
              <Form.Group controlId="paymentMethod">
                <Form.Label
                  className="fw-semibold mb-2"
                  style={{ fontSize: "1.1rem" }}
                >
                  Metodo di pagamento
                </Form.Label>
                <Form.Select
                  value={paymentMethod}
                  onChange={handlePaymentChange}
                  aria-required="true"
                  size="md"
                  style={{ minHeight: "38px" }}
                >
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
              xs={12}
              md="auto"
              className="d-flex align-items-center justify-content-md-end gap-3 mt-3 mt-md-0"
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
            >
              <div aria-live="polite" aria-atomic="true" style={{ minWidth: "130px", textAlign: "center" }}>
                Totale: € {getTotal().toFixed(2)}
              </div>
              <Button
                onClick={handleCheckout}
                disabled={cart.length === 0}
                size="md"
                aria-disabled={cart.length === 0}
                style={{ minWidth: "140px", fontWeight: "600" }}
              >
                Procedi al pagamento
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
