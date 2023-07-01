import Dropdown from "./Dropdown";
import Menu from "./Menu";
import Title from "./Title";

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

export default Navbar;
