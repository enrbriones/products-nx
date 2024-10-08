import React, { useState } from 'react';
import { Product } from '../services/product.service';

interface ProductFormProps {
  onAdd: (product: Omit<Product, 'id'>) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd({ name, description, price });
    setName('');
    setDescription('');
    setPrice(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' className='block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white'>Nombre:</label>
          <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label htmlFor='price' className='block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white'>Precio:</label>
          <input type="number" id='price' value={price} onChange={(e) => setPrice(Number(e.target.value))} required className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label htmlFor='description' className='block mb-2 mt-3 text-sm font-medium text-gray-900 dark:text-white'>Descripción:</label>
          <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} required rows={4} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <button type="submit" className='mt-8 bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600'>Agregar Producto</button>
      </form>
    </div>
  );
};

export default ProductForm;
