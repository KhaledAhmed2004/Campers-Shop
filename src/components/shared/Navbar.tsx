import { NavLink } from "react-router-dom";
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

  // Function to determine the active class for a link
  const activeClassName = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-orange-600 font-bold underline-offset-2 underline"
      : "hover:text-orange-600 font-bold";

  return (
    <header className="fixed left-0 right-0 bg-white z-[100] border-b shadow-lg top-0">
      <div className="flex h-20 mx-auto max-w-7xl justify-between items-center w-full px-4">
        {/* Logo and branding */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="" className="w-10 rounded-xl" />
          <h5 className="text-xl ms-2 font-semibold italic">CampTime</h5>
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-4">
          <ul className="flex gap-4">
            <li>
              <NavLink to="/" className={activeClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={activeClassName}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/productManagement" className={activeClassName}>
                Product Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" className={activeClassName}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Cart Icon */}
        <NavLink
          to="/cart"
          className="flex items-center gap-2 border-2 p-1 rounded-lg px-2 hover:bg-orange-600 hover:text-white hover:border-orange-700"
        >
          <IoCartOutline className="text-xl" />
          <span>{products.length}</span>
        </NavLink>

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
              <NavLink to="/" className={activeClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={activeClassName}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/productManagement" className={activeClassName}>
                Product Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" className={activeClassName}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
