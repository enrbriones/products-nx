import React from 'react';

import ProductsPage from '../pages/products/ProductsPage';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
    </Routes>
  );
};

export default App;
