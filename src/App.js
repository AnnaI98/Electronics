import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import Offerte from "./pages/Offerte";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import Laptop from "./pages/Laptop";
import Audio from "./pages/Audio";
import Accessori from "./pages/Accessori";
import Smartphone from "./pages/Smartphone";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/offerte" element={<Offerte />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/laptop" element={<Laptop />} /> 
          <Route path="/Audio" element={<Audio />} />
          <Route path="/Accessori" element={<Accessori />} />
          <Route path="/Smartphone" element={<Smartphone />} />

        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;