function InputForm(props) {
  const { children } = props;
  return <div className="form-control w-full max-w-xs">{children}</div>;
}

function Input(props) {
  const {
    type,
    placeholder,
    name,
    id,
    min,
    value,
    onChange,
    readOnly,
    minLength,
  } = props;
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
      readOnly={readOnly}
      minLength={minLength}
      className="input border-slate-600 focus:outline-none input-sm w-80 max-w-lg"
    />
  );
}

InputForm.Input = Input;

export default InputForm;
