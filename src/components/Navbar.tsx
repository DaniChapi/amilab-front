import { FaAlignJustify } from "react-icons/fa";
import logo from "../assets/logo-amilab.jpg";

export const Navbar = () => {
  return (
    <nav className="flex h-10 justify-between px-4">
      <div className="flex items-center">
        <FaAlignJustify className="" />
      </div>
      <div>
        <img src={logo} alt="logo" className="h-full block" />
      </div>
    </nav>
  );
};
