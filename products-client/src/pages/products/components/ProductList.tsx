import React from 'react';
import { Product } from '../services/productService';

interface ProductListProps {
  products: Product[];
  onDelete: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onDelete }) => {

  if(!products.length){
    return <div className="p-4 mb-4 mt-8 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 text-center" role="alert">
    <span className="font-medium">No hay productos en la lista!</span>
  </div>
  }

  return (
  <div className='relative overflow-x-auto shadow-md sm:rounded-lg container flex justify-center'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr className=''>
                <th className='px-6 py-3'>Nombre</th>
                <th className='px-6 py-3'>Descripción</th>
                <th className='px-6 py-3'>Precio</th>
                <th className='px-6 py-3'></th>
            </tr>
        </thead>
        <tbody>
        {products.map((product) => (
          <tr key={product.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>{product.name}</td>
            <td className='px-6 py-4'>{product.description}</td>
            <td className='px-6 py-4'>${product.price}</td>
            <td className='px-6 py-4 flex justify-end'>
            <button onClick={() => onDelete(product.id)} style={{ marginLeft: '10px' }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded'>Eliminar</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>

  );
};

export default ProductList;
