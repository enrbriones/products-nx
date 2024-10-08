// src/components/ProductList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductsPage from './ProductsPage';
// import '@testing-library/jest-dom/extend-expect'; // Para métodos adicionales como `toBeInTheDocument`

describe('ProductPage Component', () => {
  test('', () => {
    const {container}=render(<ProductsPage />);
    // screen.debug();
    expect(container).toMatchSnapshot()
  });
});
