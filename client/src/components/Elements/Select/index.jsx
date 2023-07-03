function Select(props) {
  const { children, name, id, onChange } = props;
  return (
    <div className="form-control w-1/4">
      <select
        className="select select-sm border-slate-600"
        name={name}
        id={id}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
}

function Options(props) {
  const { children, value, disabled } = props;
  return (
    <option value={value} disabled={disabled}>
      {children}
    </option>
  );
}

Select.Option = Options;

export default Select;
