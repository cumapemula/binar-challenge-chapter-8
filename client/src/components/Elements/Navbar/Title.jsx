import { Link } from "react-router-dom";

function Title() {
  return (
    <Link to={"/"} className="cursor-pointer uppercase font-extrabold text-xl text-slate-600 hover:text-slate-800 tracking-widest">
      binar
    </Link>
  );
}

export default Title;