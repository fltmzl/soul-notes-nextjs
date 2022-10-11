const Button = ({ type = "button", children, ...others }) => {
  return (
    <button type={type} className="w-full text-customLight-50 bg-primary py-3 px-4 rounded-xl font-semibold text-lg flex justify-center items-center" {...others}>
      {children || "Button"}
    </button>
  );
};

export default Button;
