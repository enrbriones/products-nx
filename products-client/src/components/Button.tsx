import React from 'react';

type Props = {
  fn: () => void;
  label: string;
};

const Button: React.FC<Props> = ({ fn, label }) => {
  return (
    <button
    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mb-2 shadow-md"
    onClick={fn}
  >
    {label}
  </button>
  );
};

export default Button;
