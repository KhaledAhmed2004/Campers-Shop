# CampeTime E-Commerce Platform

**Live Link** : https://campers-shop-jet.vercel.app/

# Introduction

CampTime is a versatile e-commerce platform where users can browse, add, update, and purchase products seamlessly. It offers a convenient way to manage products and provides a user-friendly shopping experience.

# Features

- Users can browse and purchase products.
- Ability to change the product quantity in the cart before checkout.
- Users can add new products to the platform.
- Update existing product details (name, price, description, etc.).
- Delete products from the system.
- Fully responsive design for optimal viewing on all devices.


# Technology Stack

**Frontend** <br/>

Frontend
React - For building the user interface.
TypeScript - For type safety in the frontend.
Redux Toolkit (RTK Query) - For efficient state management and API data fetching.
React Redux - For managing global application state.
React Hook Form - For handling form inputs and validation.
Ant Design - For pre-built, customizable UI components.
Tailwind CSS - For utility-first CSS styling.

Backend and Database
Node.js - JavaScript runtime for server-side development.
TypeScript - For adding type safety on the backend.
Express.js - Web framework for building the backend API.
MongoDB - NoSQL database for storing application data.
Mongoose - ODM (Object Data Modeling) library for MongoDB.
Zod - Schema validation library for TypeScript, ensuring data validation.

# Installation Guideline

**Prerequisites**

1. Node.js (v14 or Higher)
2. MongoDB (Locally Installed or cloud instance ) <br>

**Installation**

1. Clone the repository for Frontend <br> https://github.com/keyamoni05866/campers-shop-client <br>
2. Clone the repository for Backend <br> https://github.com/keyamoni05866/campers-shop-server <br>
3. Install Dependencies for frontend and backend ---- npm install <br>
4. Set up the Env variables for Backend: <br>

- Create a .env file in the root directory. <br>
- Add the following environment variables:<br>
  PORT=5000<br>
  DATABASE_URL= The connection string for your MongoDB database. <br>
