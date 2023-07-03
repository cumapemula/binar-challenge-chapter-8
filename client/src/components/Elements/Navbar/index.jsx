import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 w-full">
      <div className="navbar-start">
        <Dropdown></Dropdown>
        <Title></Title>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Menu></Menu>
      </div>
    </div>
  );
}

function Title() {
  return (
    <Link
      to={"/"}
      className="cursor-pointer uppercase font-extrabold text-xl text-slate-600 hover:text-slate-800 tracking-widest"
    >
      binar
    </Link>
  );
}

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

// Responsive Menu
function Dropdown() {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to={"/create"} className="text-slate-600 uppercase">
            Create
          </Link>
        </li>
        <li>
          <Link to={"/update"} className="text-slate-600 uppercase">
            Update
          </Link>
        </li>
        <li>
          <Link to={"/search"} className="text-slate-600 uppercase">
            Search
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
