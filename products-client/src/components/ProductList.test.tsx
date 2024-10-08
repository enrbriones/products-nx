// src/components/ProductList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para métodos adicionales como `toBeInTheDocument`
import ProductList from './ProductList';

describe('ProductList Component', () => {
  test('', () => {
    render(<ProductList products={[]} onDelete={()=>{console.log('hola')}} />);

  });
});
