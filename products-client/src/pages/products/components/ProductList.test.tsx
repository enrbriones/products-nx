// src/components/ProductList.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // Para métodos adicionales como `toBeInTheDocument`
import ProductList from './ProductList';

describe('ProductList Component', () => {
  test('', () => {
    const {container}=render(<ProductList products={[]} onDelete={()=>{console.log('hola')}} />);
    console.log(container)
    expect(container).toMatchSnapshot()
  });
});
