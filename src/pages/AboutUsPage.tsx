import TeamCard from "../components/card/TeamCard";
import {
  FaCampground,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLeaf,
  FaPhone,
  FaRecycle,
  FaTwitter,
} from "react-icons/fa6";
import img from "../assets/about.jpg";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
const AboutUsPage = () => {
  return (
    <div className="mt-14 mb-28 px-4 lg:px-20 min-h-screen   ">
      {/* Company Mission */}
      <div className="min-h-screen py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
              Our Mission & Values
            </h1>
            <p className="text-lg text-gray-700">
              At <span className="text-yellow-600 font-semibold">CampTime</span>
              , we are committed to promoting sustainable outdoor experiences.
              Our mission is to equip outdoor enthusiasts with the best products
              while preserving the environment.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:space-x-12">
            {/* Image Section with Hover Effect */}
            <div className="lg:w-1/2 w-full group relative">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={img} // Replace with your image URL
                  alt="Camping Gear"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Subtle Text on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-40">
                <p className="text-white text-2xl font-bold">
                  Discover Adventure
                </p>
              </div>
            </div>

            {/* Text Section with Enhanced Styling */}
            <div className="lg:w-1/2 w-full bg-white p-8 rounded-lg shadow-lg transition-transform duration-300">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
                Our Objectives
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                We focus on quality, sustainability, and creating unforgettable
                outdoor experiences. Here are our core values and goals:
              </p>

              {/* Key Mission Objectives with Icons */}
              <div className="space-y-6">
                {/* Objective 1 */}
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg shadow-md transition duration-300 hover:bg-green-100 hover:scale-105">
                  <FaLeaf className="text-green-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Eco-Friendly Products
                    </h3>
                    <p className="text-gray-600">
                      We prioritize products that are environmentally friendly
                      and sustainable to minimize our carbon footprint.
                    </p>
                  </div>
                </div>

                {/* Objective 2 */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg shadow-md transition duration-300 hover:bg-blue-100 hover:scale-105">
                  <FaRecycle className="text-blue-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Sustainable Practices
                    </h3>
                    <p className="text-gray-600">
                      Our mission is to contribute to a circular economy by
                      using recycled materials and reducing waste.
                    </p>
                  </div>
                </div>

                {/* Objective 3 */}
                <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg shadow-md transition duration-300 hover:bg-yellow-100 hover:scale-105">
                  <FaCampground className="text-yellow-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Quality Outdoor Gear
                    </h3>
                    <p className="text-gray-600">
                      We provide high-quality, durable gear that enhances your
                      camping experience, ensuring safety and comfort.
                    </p>
                  </div>
                </div>

                {/* Objective 4 */}
                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg shadow-md transition duration-300 hover:bg-purple-100 hover:scale-105">
                  <FaGlobe className="text-purple-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Global Impact
                    </h3>
                    <p className="text-gray-600">
                      We strive to make a global impact by partnering with
                      organizations to protect and preserve our natural
                      resources.
                    </p>
                  </div>
                </div>
              </div>

              {/* Call to Action Button */}
              <div className="text-center mt-8">
                <Link
                  to={"/products"}
                  className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                >
                  Explore Our Collection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* team section */}
      <h2 className="text-3xl text-center py-5">Our Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mt-6">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
      {/* Contact section*/}

      <div className="min-h-screen  py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info Section */}
            <div className="flex flex-col justify-center bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center lg:text-left">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-700 mb-8 text-center lg:text-left">
                We’d love to hear from you! Reach out to us through any of the
                methods below.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg shadow-md transition duration-300 hover:bg-blue-100 hover:scale-105">
                  <FaPhone className="text-blue-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Phone
                    </h3>
                    <p className="text-gray-600">+123 456 7890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg shadow-md transition duration-300 hover:bg-green-100 hover:scale-105">
                  <FaEnvelope className="text-green-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Email
                    </h3>
                    <p className="text-gray-600">info@campgear.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg shadow-md transition duration-300 hover:bg-yellow-100 hover:scale-105">
                  <FaMapMarkerAlt className="text-yellow-600 text-3xl" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Address
                    </h3>
                    <p className="text-gray-600">
                      123 Outdoor St, Adventure City, USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-6 text-3xl">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 transition-transform duration-300 hover:scale-110"
                  >
                    <FaFacebook />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 transition-transform duration-300 hover:scale-110"
                  >
                    <FaTwitter />
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 transition-transform duration-300 hover:scale-110"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="w-full h-96 lg:h-auto rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345081697!2d144.95565131531696!3d-37.81732797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c5f0a5f5238!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1603950946848!5m2!1sen!2sau"
                width="100%"
                height="100%"
                loading="lazy"
                style={{ border: 0 }}
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
