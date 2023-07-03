function Table(props) {
  const { children } = props;
  return <table className="table table-sm">{children}</table>;
}

function Header(props) {
  const { children } = props;
  return (
    <thead className="text-center uppercase">
      <tr className="border border-black">{children}</tr>
    </thead>
  );
}

function Body(props) {
  const { children } = props;
  return <tbody className="text-center border border-black">{children}</tbody>;
}

Table.Header = Header;
Table.Body = Body;

export default Table;
