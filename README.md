# ClickCart

ClickCart is an e-commerce platform that allows users to browse products, add them to the cart, and proceed to checkout. It also includes an admin dashboard for managing products and viewing analytics.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

```sh
git clone https://github.com/johnson-Omwoyo/The_BandInterview
```

2. Navigate to the project directory:

```sh
cd clickCart
```

3. Install dependencies:

```sh
npm install
```

## Usage

1. Start the development server:

```sh
npm run dev
```

2. Open your browser and navigate to `http://localhost:3000`.

## Components

### ProductManagementSection

Manages the creation, editing, and deletion of products.

### HomePage

Displays the list of products and offers.

### AdminLogin

Handles admin authentication.

### AdminDashboard

Displays the admin dashboard with product management and analytics sections.

### AnalyticsSection

Shows sales performance and product comparison charts.

### Testimonials

Displays customer testimonials.

### App

Main application component that includes the Navbar, Footer, and routes.

### Footer

Displays company information, contact details, and social media links.

### Navbar

Navigation bar with links to home, admin login, and cart.

### CartContext

Provides context for managing the shopping cart.

### ErrorPage

Displays a 404 error message for unknown routes.

### OrderConfirmationPage

Displays order confirmation details.

### CheckoutPage

Handles the checkout process.

### CartsPage

Displays the items in the shopping cart.

### ProductDetails

Displays detailed information about a selected product.

### ProductsPage

Displays a list of products.

## Routes

- `/` - HomePage
- `/login` - AdminLogin
- `/cart` - CartsPage
- `/checkout` - CheckoutPage
- `/details` - ProductDetails
- `/products` - ProductsPage
- `/dashboard` - AdminDashboard
- `/order-confirmation` - OrderConfirmationPage
