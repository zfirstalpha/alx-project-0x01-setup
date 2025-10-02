import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      {text}
    </button>
  );
};

export default Button;
