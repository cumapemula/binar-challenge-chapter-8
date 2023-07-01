import Body from "../Elements/Table/Body";
import Header from "../Elements/Table/Header";

function ListUpdate(props) {
  const {children} = props;
  return (
    <div className="overflow-auto w-2/5 mx-auto max-h-64">
      <table className="table table-sm border border-slate-600">
        <Header>
          <th>Username</th>
          <th>Email</th>
          <th>Experience</th>
        </Header>
        <Body>{children}</Body>
      </table>
    </div>
  );
}

export default ListUpdate;
