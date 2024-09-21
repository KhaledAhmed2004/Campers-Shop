import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppSelector } from "../../../redux/hook";
import { GiCampingTent } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const products = useAppSelector((store) => store.cart.products);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 right-0 bg-white z-[100] border-b shadow-lg top-0">
      <div className="flex h-20 mx-auto max-w-7xl justify-between items-center w-full px-4">
        <Link to={"/"} className="flex items-center">
          <GiCampingTent className="text-3xl text-green-700" />
          <h5 className="text-xl ms-2 font-semibold italic">CampTime</h5>
        </Link>

        <div className="hidden md:flex flex-col md:flex-row gap-4">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="hover:text-green-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-green-500">
                Products
              </Link>
            </li>
            <li>
              <Link to="/productManagement" className="hover:text-green-500">
                Product Management
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="hover:text-green-500">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <Link
          to="/cart"
          className="flex items-center gap-2 border p-1 rounded-lg px-2"
        >
          <IoCartOutline className="text-xl" />
          <span>{products.length}</span>
        </Link>
        <button className="md:hidden p-2" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link to="/" className="block hover:text-green-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="block hover:text-green-500">
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/productManagement"
                className="block hover:text-green-500"
              >
                Product Management
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="block hover:text-green-500">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
