import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Container, Form, Carousel } from "react-bootstrap";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search)}`);
      setSearch("");
    }
  };

  return (
    <>
      
      <section
        style={{
          background: "linear-gradient(135deg, #4F46E5, #9333EA)",
          color: "#fff",
          padding: "6rem 1rem",
          textAlign: "center",
        }}
      >
        <Container>
          <h1 className="fw-bold display-5 mb-3">Benvenuto in ElectroShop</h1>
          <p className="lead mb-4">
            Tecnologia di ultima generazione a portata di mano.
          </p>

          <Form
            onSubmit={handleSearch}
            className="d-flex flex-column flex-sm-row justify-content-center gap-2"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            <Form.Control
              type="search"
              placeholder="Cerca un prodotto..."
              className="rounded-pill px-3 py-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button
              type="submit"
              variant="light"
              className="rounded-pill px-4 fw-semibold"
            >
              Scopri i prodotti
            </Button>
          </Form>
        </Container>
      </section>

      
      <section style={{ backgroundColor: "#F9FAFB", padding: "4rem 1rem" }}>
        <Container>
          <h2 className="text-center fw-bold mb-5" style={{ color: "#4F46E5" }}>
            Prodotti in evidenza
          </h2>

          <Carousel interval={3000} className="shadow rounded overflow-hidden">
            <Carousel.Item>
              <div
                onClick={() => navigate("/laptop")}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="d-block w-100"
                  src="/images/Pc.jpg"
                  alt="Laptop"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
              <Carousel.Caption>
                <h3>Laptop</h3>
                <p>Prestazioni elevate per ogni esigenza.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div
                onClick={() => navigate("/accessori")}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="d-block w-100"
                  src="/images/Accessori.jpg"
                  alt="Accessori"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
              <Carousel.Caption>
                <h3>Accessori</h3>
                <p>Completa il tuo setup con accessori di qualità.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div
                onClick={() => navigate("/audio")}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="d-block w-100"
                  src="/images/CuffieA.jpg"
                  alt="Audio"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
              <Carousel.Caption>
                <h3>Audio</h3>
                <p>Esperienza sonora senza compromessi.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div
                onClick={() => navigate("/smartphone")}
                style={{ cursor: "pointer" }}
              >
                <img
                  className="d-block w-100"
                  src="/images/Phone.jpg"
                  alt="Smartphone"
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </div>
              <Carousel.Caption>
                <h3>Smartphone</h3>
                <p>I modelli più recenti sempre a portata di mano.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}

