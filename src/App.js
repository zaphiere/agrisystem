import './App.css';
import StickyNav from './components/StickyNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Logout from './pages/Logout';
import ProductSearch from './pages/ProductSearch';
import SpecificProduct from './pages/SpecificProduct';
import History from './pages/History';
import PageNotFound from './components/404-page';
import ProductSearchView from './components/ProductSearchView';
import { useState } from 'react';
import { UserProvider } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    const [ user, setUser ] = useState({
        accessToken: localStorage.getItem('accessToken'),
        isAdmin: localStorage.getItem('isAdmin') === 'true'
    })
    const unsetUser = () => {
        localStorage.clear();
    }

  return (
    <UserProvider value = {{ user, setUser, unsetUser }}>
        <BrowserRouter>
            <StickyNav />
                <Routes>
                    <Route path="/products" element={ <Products />} />
                    <Route path="/products/:productId" element={ <SpecificProduct />} />
                    <Route path="/products/active/:productName" element={ <ProductSearch />} />
                    <Route path="/history" element={ <History />} />
                    <Route path="/register" element={ <Register />} />
                    <Route path="/cart" element={ <Cart />} />
         
                    <Route path="/" element={ <Home />} />
                    <Route path="/login" element={ <Login />} />
                    <Route path="/logout" element={ <Logout />} />
                    <Route path="/noproduct" element={ <ProductSearchView />} />
                    <Route path="*" element={ <PageNotFound /> } />
                </Routes>
              <Footer />
        </BrowserRouter>
    </UserProvider>
  );
}

export default App;
