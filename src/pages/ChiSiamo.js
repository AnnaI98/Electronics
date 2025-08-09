import { Container, Row, Col, Image } from "react-bootstrap";

export default function ChiSiamo() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2>Chi siamo</h2>
          <p>
            Benvenuto su <strong>ElectroShop</strong>, il tuo negozio online di fiducia
            per prodotti elettronici di ultima generazione. La nostra missione è
            offrirti la migliore esperienza d’acquisto, unendo qualità, convenienza e
            innovazione.
          </p>
          <p>
            Da oltre 10 anni lavoriamo per selezionare smartphone, laptop, accessori e
            dispositivi audio dei migliori brand mondiali. Consegna veloce, supporto
            clienti sempre disponibile e garanzia soddisfatti o rimborsati!
          </p>
        </Col>
        <Col md={6}>
          <Image
            src="https://www.experientia.it/wp-content/uploads/2023/03/team02.jpg"
            alt="Chi siamo"
            fluid
            rounded
          />
        </Col>
      </Row>
    </Container>
  );
}
