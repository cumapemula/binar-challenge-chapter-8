import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import Select from "../Elements/Select";
import Label from "../Elements/Label";

function Form(props) {
  const { onSubmit, children } = props;
  return (
    <div className="flex flex-wrap justify-center w-full">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}

Form.Input = InputForm.Input;
Form.Label = Label;
Form.Select = Select;
Form.Button = Button;

export default Form;
