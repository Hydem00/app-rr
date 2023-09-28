import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import ProductPage from '../pages/ProductPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';
import ProductListPage from '../pages/ProductListPage';

const Page = () => {
  return ( 
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductListPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
   );
}
 
export default Page;