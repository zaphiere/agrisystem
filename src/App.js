import './App.css';
import StickyNav from './components/StickyNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import PageNotFound from './components/404-page';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <StickyNav />
            <Routes>
                <Route path="/products" element={ <Products />} />
                <Route path="/register" element={ <Register />} />
     
                <Route path="/" element={ <Home />} />
                <Route path="/login" element={ <Login />} />
                <Route path="*" element={ <PageNotFound /> } />
            </Routes>
          <Footer />
    </BrowserRouter>
  );
}

export default App;
