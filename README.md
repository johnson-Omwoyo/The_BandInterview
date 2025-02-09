# Frontend Product Management Application

## Project Overview

This is a ReactJS web application that allows users to view, add, update, and delete products. The app features a product listing, admin authentication, product management functionality, and basic cart integration. The goal of the project was to demonstrate proficiency in ReactJS, TypeScript, and API integration.

The application includes an Admin Dashboard where products can be managed, and it uses mock APIs for fetching and updating product data.

### Key Features:

- **Landing Page:**

  - Navigation bar with company logo and interactive cart icon.
  - Product listing with sorting/filtering options.
  - Promotional banner with featured products and current offers.
  - Testimonials section displaying customer reviews.
  - Footer with company information, contact details, and social media links.

- **Product Card Functionality:**

  - Add products to the cart with a visual cart count indicator.
  - Remove items from the cart and update the count dynamically.

- **Admin Authentication:**

  - Secure login page with form validation and error handling.
  - Admin authentication via React Context for session management.

- **Admin Dashboard:**
  - Analytics section with sales graphs, product comparisons, and inventory status.
  - CRUD operations for managing products (create, read, update, delete).

## Technologies Used

- **ReactJS** (with TypeScript)
- **React Context** / Zustand for global state management
- **Styled-components** for component styling
- **RESTful API** integration (Faker API / JSON Placeholder for mock data)
- **React Router** for navigation
- **Git** for version control

## Setup Instructions

### Prerequisites

Before running the project, make sure you have the following tools installed:

- Node.js (version 14 or higher)
- npm or Yarn (Package Manager)

### Installation

1. Clone the repository to your local machine.
2. Install the necessary dependencies.

---

## Running the Application

### Development Mode

To run the application in development mode, use the appropriate command to start the app.

This will start the app and it will be available at the default localhost URL.

---

## Project Structure

Here is an overview of the project directory structure:

- /assets: Static files like images, fonts, etc.
- /components: Reusable UI components (Button, ProductCard, etc.)
- /context: Global state management using React Context
- /pages: Main pages like Home, Admin Dashboard, Product Details
- /services: API interaction logic (fetching products)
- /styles: Global styles or styled-components
- /utils: Helper functions, form validation logic, etc.
- App.tsx: Root application component
- index.tsx: Entry point of the application

---

## Features Explained

### 1. Landing Page

- **Navigation Bar:** Includes the company logo, navigation links, and a cart icon that displays the number of items added to the cart.
- **Product Listing Section:** Displays products in a grid/list view with filtering and sorting options.
- **Promotional Banner:** Highlights featured products and current offers.
- **Testimonials Section:** Showcases customer reviews with a rating system.
- **Footer:** Displays company contact info, social media links, and more.

### 2. Product Card Functionality

- Clicking a product card navigates to the product's detailed view, where the user can see the product image, description, and price.
- Users can add items to their cart, and the cart count is updated with animation.
- There’s an option to remove items from the cart with visual feedback.

### 3. Admin Authentication

- Secure login page where administrators can enter their credentials (email/username and password).
- Form validation and error handling in case of invalid credentials.

### 4. Admin Dashboard

- **Analytics Section:** Displays sales data, product comparisons, and inventory status using simple charts/graphs.
- **Product Management:** CRUD functionality that allows admins to:
  - Create new products.
  - View product details.
  - Edit and update product information.
  - Delete products with confirmation prompts.

---

## API Integration

The app uses a mock REST API to simulate fetching and managing product data. The API is implemented using Faker API or JSON Placeholder, providing realistic fake data for products.

- **Endpoints:**
  - Fetch product list
  - Add new product
  - Update product
  - Delete product

---

## Error Handling

- **Error Boundaries:** React error boundaries have been implemented to catch any UI-related errors and display an error message.
- **Loading States:** Visual loading indicators are shown when data is being fetched from the API.
- **Form Validation:** Ensures that required fields are filled out before submitting forms (e.g., login, product creation).

---

## Version Control

- Regular commits were made throughout the project to ensure a clear version history.
- GitHub repository link is provided with clear commit messages.

---

## Deployment

- The project has been deployed using Vercel or Netlify, and you can view the live application link.

---

## Conclusion

This project demonstrates proficiency in ReactJS and TypeScript, showcasing the ability to build dynamic and interactive web applications with a focus on component-based architecture, state management, and API integration.

Feel free to explore the project, try out the features, and check out the code on GitHub.

---

## License

MIT License. See the LICENSE file for more details.

---

## Contact Information

For further questions or technical issues, feel free to contact:

- Your Name  
  your-email@example.com

# Frontend Product Management Application

## Project Overview

This is a ReactJS web application that allows users to view, add, update, and delete products. The app features a product listing, admin authentication, product management functionality, and basic cart integration. The goal of the project was to demonstrate proficiency in ReactJS, TypeScript, and API integration.

The application includes an Admin Dashboard where products can be managed, and it uses mock APIs for fetching and updating product data.

### Key Features:

- **Landing Page:**

  - Navigation bar with company logo and interactive cart icon.
  - Product listing with sorting/filtering options.
  - Promotional banner with featured products and current offers.
  - Testimonials section displaying customer reviews.
  - Footer with company information, contact details, and social media links.

- **Product Card Functionality:**

  - Add products to the cart with a visual cart count indicator.
  - Remove items from the cart and update the count dynamically.

- **Admin Authentication:**

  - Secure login page with form validation and error handling.
  - Admin authentication via React Context for session management.

- **Admin Dashboard:**
  - Analytics section with sales graphs, product comparisons, and inventory status.
  - CRUD operations for managing products (create, read, update, delete).

## Technologies Used

- **ReactJS** (with TypeScript)
- **React Context** / Zustand for global state management
- **Styled-components** for component styling
- **RESTful API** integration (Faker API / JSON Placeholder for mock data)
- **React Router** for navigation
- **Git** for version control

## Setup Instructions

### Prerequisites

Before running the project, make sure you have the following tools installed:

- Node.js (version 14 or higher)
- npm or Yarn (Package Manager)

### Installation

1. Clone the repository to your local machine.
2. Install the necessary dependencies.

---

## Running the Application

### Development Mode

To run the application in development mode, use the appropriate command to start the app.

This will start the app and it will be available at the default localhost URL.

---

## Project Structure

Here is an overview of the project directory structure:

- /assets: Static files like images, fonts, etc.
- /components: Reusable UI components (Button, ProductCard, etc.)
- /context: Global state management using React Context
- /pages: Main pages like Home, Admin Dashboard, Product Details
- /services: API interaction logic (fetching products)
- /styles: Global styles or styled-components
- /utils: Helper functions, form validation logic, etc.
- App.tsx: Root application component
- index.tsx: Entry point of the application

---

## Features Explained

### 1. Landing Page

- **Navigation Bar:** Includes the company logo, navigation links, and a cart icon that displays the number of items added to the cart.
- **Product Listing Section:** Displays products in a grid/list view with filtering and sorting options.
- **Promotional Banner:** Highlights featured products and current offers.
- **Testimonials Section:** Showcases customer reviews with a rating system.
- **Footer:** Displays company contact info, social media links, and more.

### 2. Product Card Functionality

- Clicking a product card navigates to the product's detailed view, where the user can see the product image, description, and price.
- Users can add items to their cart, and the cart count is updated with animation.
- There’s an option to remove items from the cart with visual feedback.

### 3. Admin Authentication

- Secure login page where administrators can enter their credentials (email/username and password).
- Form validation and error handling in case of invalid credentials.

### 4. Admin Dashboard

- **Analytics Section:** Displays sales data, product comparisons, and inventory status using simple charts/graphs.
- **Product Management:** CRUD functionality that allows admins to:
  - Create new products.
  - View product details.
  - Edit and update product information.
  - Delete products with confirmation prompts.

---

## API Integration

The app uses a mock REST API to simulate fetching and managing product data. The API is implemented using Faker API or JSON Placeholder, providing realistic fake data for products.

- **Endpoints:**
  - Fetch product list
  - Add new product
  - Update product
  - Delete product

---

## Error Handling

- **Error Boundaries:** React error boundaries have been implemented to catch any UI-related errors and display an error message.
- **Loading States:** Visual loading indicators are shown when data is being fetched from the API.
- **Form Validation:** Ensures that required fields are filled out before submitting forms (e.g., login, product creation).

---

## Version Control

- Regular commits were made throughout the project to ensure a clear version history.
- GitHub repository link is provided with clear commit messages.

---

## Deployment

- The project has been deployed using Vercel[Click here](https://the-band-interview-git-main-johnson-omwoyos-projects.vercel.app/).

---

## Conclusion

This project demonstrates proficiency in ReactJS and TypeScript, showcasing the ability to build dynamic and interactive web applications with a focus on component-based architecture, state management, and API integration.

Feel free to explore the project, try out the features, and check out the code on GitHub.

---

## Contact Information

For further questions or technical issues, feel free to contact:

- Omwoyo Johnson  
  johnsonomwoyo@gmail.com
