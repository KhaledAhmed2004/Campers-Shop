import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Outlet } from "react-router-dom";
import PageRefresh from "./PageRefresh";

const MainLayout = () => {
  PageRefresh();
  return (
    <div className="font-montserrat bg-gray-10 font-poppins">
      <Navbar />
      <div className="mx-auto max-w-7xl pt-[80px]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
