import './App.css';
import StickyNav from './components/StickyNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
        <StickyNav />
        <Container>
            <Routes>
                <Route path="/products" element={ <Products />} />
                <Route path="/register" element={ <Register />} />
            </Routes>
        </Container>
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/login" element={ <Login />} />
            </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
