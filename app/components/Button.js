"use client";

const Button = ({ children, ...props }) => {
  return (
    <button className="bg-green-500 rounded-lg px-4 py-2 text-white" {...props}>
      {children}
    </button>
  );
};

export default Button;
