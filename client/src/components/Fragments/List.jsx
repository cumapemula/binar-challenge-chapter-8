import Table from "../Elements/Table";

function List(props) {
  const { children } = props;
  return (
    <div className="overflow-auto w-2/5 mx-auto max-h-40">
      <Table>{children}</Table>
    </div>
  );
}

List.Header = Table.Header;
List.Body = Table.Body;

export default List;
