import { Container, Form, Button, Row, Col } from "react-bootstrap";

export default function Contatti() {
  return (
    <Container className="mt-5">
      <h2 className="mb-4 text-center">Contattaci</h2>
      <Row>
        <Col md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" placeholder="Inserisci il tuo nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Inserisci la tua email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessaggio">
              <Form.Label>Messaggio</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Scrivi qui il tuo messaggio" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Invia
            </Button>
          </Form>
        </Col>
        <Col md={6} className="mt-4 mt-md-0">
          <h5>Dove trovarci</h5>
          <p><strong>Indirizzo:</strong> Via Roma 123, Milano</p>
          <p><strong>Telefono:</strong> +39 00 002 393</p>
          <p><strong>Email:</strong> support@electroshop.it</p>
          <iframe
            title="Mappa"
            src="https://maps.google.com/maps?q=milano&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="250"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
