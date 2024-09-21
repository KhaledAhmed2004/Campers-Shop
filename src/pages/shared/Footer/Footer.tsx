// import React from "react";
// import { LuCopyright } from "react-icons/lu";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { GiCampingTent } from "react-icons/gi";
// import { GrInstagram } from "react-icons/gr";

// const Footer = () => {
//   return (
//     <footer className="mt-8">
//       <div className="border-t-2 px-6 pt-8 pb-4 bg-white rounded-lg">
//         <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 md:flex-row md:justify-between md:items-start">
//           {/* Logo and description */}
//           <div className="flex flex-col items-start lg:w-1/3 md:w-1/2">
//             <div className="flex items-center">
//               <GiCampingTent className="text-3xl text-green-500" />
//               <h5 className="text-xl ms-2 font-semibold italic">Camp Time</h5>
//             </div>
//             <p className="mt-4">
//               Rent your perfect car in minutes! Affordable rates, easy booking,
//               and a wide selection. Drive away today!
//             </p>
//             <div className="flex gap-4 mt-4 text-2xl">
//               <FaFacebook className="hover:text-green-500 cursor-pointer" />
//               <FaLinkedin className="hover:text-green-500 cursor-pointer" />
//               <GrInstagram className="hover:text-green-500 cursor-pointer" />
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex flex-col md:w-1/4 lg:w-1/3">
//             <h4 className="font-semibold text-lg">Navigation</h4>
//             <ul className="mt-2 space-y-2">
//               <li>
//                 <NavLink to="/" className="hover:text-green-500">
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/aboutUs" className="hover:text-green-500">
//                   About Us
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/booking" className="hover:text-green-500">
//                   Booking
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/car-listing" className="hover:text-green-500">
//                   Car Listing
//                 </NavLink>
//               </li>
//             </ul>
//           </div>

//           {/* Legal Links */}
//           <div className="flex flex-col md:w-1/4 lg:w-1/3">
//             <h4 className="font-semibold text-lg">Legal</h4>
//             <ul className="mt-2 space-y-2">
//               <li>
//                 <NavLink to="/terms" className="hover:text-green-500">
//                   Terms
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/privacy-policy" className="hover:text-green-500">
//                   Privacy Policy
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/legal-notice" className="hover:text-green-500">
//                   Legal Notice
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/accessibility" className="hover:text-green-500">
//                   Accessibility
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="flex flex-col lg:flex-row items-center justify-center gap-1 p-3 mt-8 border-t">
//           <LuCopyright />
//           <p className="text-center">© 2024 Camp Time, All Rights Reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { LuCopyright } from "react-icons/lu";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiCampingTent } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="mt-8">
      <div className="border-t-2 px-6 pt-8 pb-4 bg-white rounded-lg">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 md:flex-row md:justify-between md:items-start">
          {/* Logo and description */}
          <div className="flex flex-col items-start lg:w-1/3 md:w-1/2">
            <div className="flex items-center">
              <GiCampingTent className="text-3xl text-green-700" />
              <h5 className="text-xl ms-2 font-semibold italic">Camp Time</h5>
            </div>
            <p className="mt-4">
              Rent your perfect car in minutes! Affordable rates, easy booking,
              and a wide selection. Drive away today!
            </p>
            <div className="flex gap-4 mt-4 text-2xl">
              <FaFacebook className="hover:text-green-900 cursor-pointer" />
              <FaLinkedin className="hover:text-green-900 cursor-pointer" />
              <GrInstagram className="hover:text-green-900 cursor-pointer" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:w-1/4 lg:w-1/3">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink to="/" className="hover:text-green-900">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/aboutUs" className="hover:text-green-900">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className="hover:text-green-900">
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/car-listing" className="hover:text-green-900">
                  Car Listing
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col md:w-1/4 lg:w-1/3">
            <h4 className="font-semibold text-lg">Legal</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <NavLink to="/terms" className="hover:text-green-900">
                  Terms
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="hover:text-green-900">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/legal-notice" className="hover:text-green-900">
                  Legal Notice
                </NavLink>
              </li>
              <li>
                <NavLink to="/accessibility" className="hover:text-green-900">
                  Accessibility
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-1 p-3 mt-8 border-t">
          <LuCopyright />
          <p className="text-center">© 2024 Camp Time, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
