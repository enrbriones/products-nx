import React, { useEffect, useState } from 'react';

import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import {
  createProduct,
  deleteProduct,
  getProducts,
  Product,
} from '../services/productService';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
      setIsModalOpen(false);
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async (newProduct: Omit<Product, 'id'>) => {
    const createdProduct = await createProduct(newProduct);
    setProducts([...products, createdProduct]);
    setIsModalOpen(false);
  };

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
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
