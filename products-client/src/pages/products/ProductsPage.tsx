import React from 'react';

import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import {
  createProduct,
  deleteProduct,
} from './services/product.service';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import { Product } from './interfaces/product.interface';
import { useFetchProducts } from './hooks/useFetchProducts';

const ProductsPage: React.FC = () => {

  const {products, isModalOpen, setIsModalOpen, reFetch} = useFetchProducts();

  const handleAddProduct = async (newProduct: Omit<Product, 'id'>) => {
   await createProduct(newProduct);
    reFetch()
    setIsModalOpen(false);
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
    reFetch()
  };

  const handleOpen = () => setIsModalOpen(true)
  const handleClose = () => setIsModalOpen(false)

  return (
    <div className="container mx-auto">
      <div className="text-center flex justify-between mt-6">
      <h1 className='text-2xl'>Productos</h1>
        <Button fn={handleOpen} label='Agregar producto' />
      </div>
      {isModalOpen && (
        <Modal close={handleClose} isOpen={isModalOpen}>
          <ProductForm onAdd={handleAddProduct} />
        </Modal>
      )}
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default ProductsPage;
