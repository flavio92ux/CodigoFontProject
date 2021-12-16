import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProductProvider } from './context/productsProvider';
import LoginPage from './pages/LoginPage';
import Products from './pages/Products';
import RegisterPage from './pages/RegisterPage';
import RegisterProduct from './pages/RegisterProduct';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate replace to="/login" /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route
        path="/products"
        element={
          <ProductProvider>
            <Products />
          </ProductProvider>
        }
      />
      <Route path="/registerProduct" element={ <RegisterProduct /> } />
    </Routes>
  );
}

export default App;
