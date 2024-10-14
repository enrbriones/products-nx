// src/components/ProductList.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ProductsPage from './ProductsPage';
import { useFetchProducts } from './hooks/useFetchProducts';
import '@testing-library/jest-dom/'; // Para métodos adicionales como `toBeInTheDocument`

jest.mock('./hooks/useFetchProducts');

const productsInitialMock = [
  {
    id: 'aaaaaaaa',
    name: 'producto 1',
    description: 'desc1',
    price: 1111111,
  },
  {
    id: 'bbbbbbbb',
    name: 'producto 2',
    description: 'desc2',
    price: 1111111,
  },
  {
    id: 'ccccccccc',
    name: 'producto 3',
    description: 'desc3',
    price: 1111111,
  },
  {
    id: 'dddddddd',
    name: 'producto 4',
    description: 'desc4',
    price: 1111111,
  },
];

describe('ProductPage Component', () => {
  test('it should display table if products have data', () => {
    (useFetchProducts as jest.Mock).mockReturnValue({
      products: productsInitialMock,
      setIsModalOpen: jest.fn(),
    });

    const { container } = render(<ProductsPage />);
    const table = screen.getByRole('table');
    // console.log('table', table.outerHTML);
    // screen.debug();
    expect(container).toMatchSnapshot();
    expect(table).toBeTruthy();
    expect(table).toBeInTheDocument()
  });
  test('it should display alert message if products is empty', () => {
    (useFetchProducts as jest.Mock).mockReturnValue({
      products: [],
      setIsModalOpen: jest.fn(),
    });

    render(<ProductsPage />);
    const span = screen.getByRole('alert');
    // console.log('span', span[0].outerHTML);
    // screen.debug();
    expect(span).toBeTruthy();
  });

  test('it should call setIsModalOpen when click at create button', () => {
    const setIsModalOpen = jest.fn();
    (useFetchProducts as jest.Mock).mockReturnValue({
      products: productsInitialMock,
      setIsModalOpen,
    });

    render(<ProductsPage />);
    const addProductButton = screen.getByText('Agregar producto');
    // console.log(addProductButton.outerHTML);
    addProductButton.click();
    // screen.debug();
    expect(setIsModalOpen).toHaveBeenCalled();
    expect(setIsModalOpen).toHaveBeenCalledTimes(1);
  });

  test('it should open modal when isModalOpen value is true', () => {
    const setIsModalOpen = jest.fn();
    (useFetchProducts as jest.Mock).mockReturnValue({
      products: productsInitialMock,
      setIsModalOpen,
      isModalOpen: true,
    });
    render(<ProductsPage />);
    const form = screen.getByRole('form');
    expect(form).toBeTruthy();
  });
});
