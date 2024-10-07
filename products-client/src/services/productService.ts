import axios from 'axios';

// Definimos la interfaz del producto
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

//Para efectos prácticos, dejo la URL en duro. Pero esto debería estar en un archivo .env
const API_URL = 'http://localhost:3000/api/products';

export const getProducts = async (): Promise<Product[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
