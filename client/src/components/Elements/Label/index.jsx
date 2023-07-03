function Label(props) {
  const { htmlFor, children } = props;
  return (
    <label className="label" htmlFor={htmlFor}>
      <span className="label-text capitalize">{children}</span>
    </label>
  );
}

export default Label;
