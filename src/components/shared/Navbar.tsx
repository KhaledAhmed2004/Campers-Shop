import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "../../redux/hook";
import { useState } from "react";
import logo from "../../assets/logo.png";
const Navbar = () => {
  // Retrieve products from the cart store
  const products = useAppSelector((store) => store.cart.products);
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 right-0 bg-white z-[100] border-b shadow-lg top-0">
      <div className="flex h-20 mx-auto max-w-7xl justify-between items-center w-full px-4">
        {/* Logo and branding */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="" className="w-10   rounded-xl" />
          <h5 className="text-xl ms-2 font-semibold italic">CampTime</h5>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          <ul className="flex gap-4">
            <li>
              <Link to="/" className="hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange-600">
                Products
              </Link>
            </li>
            <li>
              <Link to="/productManagement" className="hover:text-orange-600">
                Product Management
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="hover:text-orange-600">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Cart Icon */}
        <Link
          to="/cart"
          className="flex items-center gap-2 border-2 p-1 rounded-lg px-2 hover:bg-orange-600 hover:text-white hover:border-orange-700"
        >
          <IoCartOutline className="text-xl" />
          <span>{products.length}</span>
        </Link>

        {/* Mobile Menu Icon */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile menu (only visible on smaller screens) */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link to="/" className="block hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="block hover:text-orange-600">
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/productManagement"
                className="block hover:text-orange-600"
              >
                Product Management
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="block hover:text-orange-600">
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
