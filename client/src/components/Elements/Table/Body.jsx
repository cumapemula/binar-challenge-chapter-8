function Body(props) {
  const {children} = props;
  return (
    <tbody className="text-center">{children}</tbody>
  );
}

export default Body;