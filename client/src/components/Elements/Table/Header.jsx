function Header(props) {
  const {children} = props;
  return (
    <thead className="text-center uppercase">
      <tr className="border-b-slate-600">{children}</tr>
    </thead>
  );
}

export default Header;