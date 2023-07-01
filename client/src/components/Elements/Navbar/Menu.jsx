import { Link } from "react-router-dom";

function Menu() {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <Link to={"/create"} className="text-slate-600 uppercase font-semibold">
          Create
        </Link>
      </li>
      <li tabIndex={0}>
        <Link to={"/update"} className="text-slate-600 uppercase font-semibold">
          Update
        </Link>
      </li>
      <li>
        <Link to={"/search"} className="text-slate-600 uppercase font-semibold">
          Search
        </Link>
      </li>
    </ul>
  );
}

export default Menu;