function Button(props) {
  const { type, children } = props;
  return (
    <button
      type={type}
      className="btn-sm bg-slate-600 hover:bg-slate-900 text-white capitalize tracking-wider focus:outline-none hover:border-none transition-colors duration-300 ease-linear mt-5 py-0"
    >
      {children}
    </button>
  );
}

export default Button;
