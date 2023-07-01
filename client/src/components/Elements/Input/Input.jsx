function Input(props) {
  const { type, placeholder, name, id, min, value, onChange } = props;
  return (
    <input
      autoComplete="off"
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      id={id}
      min={min}
      required
      className="input border-slate-600 focus:outline-none input-sm w-80 max-w-lg"
    />
  );
}

export default Input;
