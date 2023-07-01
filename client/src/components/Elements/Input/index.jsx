import Input from "./Input";
import Label from "./Label";

function InputForm(props) {
  const { htmlFor, type, placeholder, name, children, id, min, value, onChange } = props;
  return (
    <div className="form-control w-full max-w-xs">
      <Label htmlFor={htmlFor}>{children}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        min={min}
        value={value}
        onChange={onChange}
      ></Input>
    </div>
  );
}

export default InputForm;
