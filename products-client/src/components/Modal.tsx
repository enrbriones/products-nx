import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  close: () => void;
  isOpen: boolean;
};

const Modal: React.FC<Props> = ({ children, close, isOpen }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded shadow-lg max-w-lg w-full">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Crear nuevo producto</h2>
          <button
            className="text-gray-700 px-4 py-2 rounded hover:bg-gray-200"
            onClick={close}
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
