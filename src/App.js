import './App.css';
import StickyNav from './components/StickyNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Logout from './pages/Logout';
import PageNotFound from './components/404-page';
import { useState } from 'react';
import { UserProvider } from './UserContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    const [ user,setUser ] = useState({
        email: localStorage.getItem('email')
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
                    <Route path="/register" element={ <Register />} />
         
                    <Route path="/" element={ <Home />} />
                    <Route path="/login" element={ <Login />} />
                    <Route path="/logout" element={ <Logout />} />
                    <Route path="*" element={ <PageNotFound /> } />
                </Routes>
              <Footer />
        </BrowserRouter>
    </UserProvider>
  );
}

export default App;
