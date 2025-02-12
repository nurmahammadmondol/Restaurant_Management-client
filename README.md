# Yum Yum Bites: A Food-Based Web Application

## 🚀 Live Site 🔗 [Yum Yum Bites Restaurant](https://yumyum-bites-restaurant.netlify.app/)

#### Server Site: https://restaurant-management-server-side-seven.vercel.app/AllFoods , https://restaurant-management-server-side-seven.vercel.app/OrderFoods

## Yum Yum Bites Server

Yum Yum Bites is a responsive food ordering platform that allows users to
browse, add, update, and order food items. With a user-friendly interface,
robust authentication system, and private routes for personalized experiences,
this platform enhances the online food ordering experience.

### Key Features

- User Authentication: Email/password-based login/register with Google login
  option. Conditional navbar buttons based on login state.

- Private Routes: Add Food, My Foods, My Orders, and Food Purchase pages are
  restricted to authenticated users only.

- Food Management: Users can add, view, update, or delete their own added food
  items.

- Order Management: Users can order food items and view their orders with
  purchase date and time.

- Responsive Design: Fully responsive layout for mobile, tablet, and desktop
  views.

- Search Functionality: Search food items by name on the All Foods page.

- Real-Time Updates: Quantity validation ensures users cannot purchase more than
  available stock.

- Pages Overview

- Navbar

- Displays the website logo and navigation links for Home, All Foods, Gallery,
  Add Food, My Foods, and My Orders.

- Conditional rendering of login/register buttons or user profile with a logout
  option.

### Home Page (Public)

- Includes a banner with a heading, short description, and a button redirecting
  to the All Foods page.

- Top Foods section displaying the 6 top-selling food items.

- Additional two attractive sections for user engagement.

### All Foods Page (Public)

- Displays all food items stored in the database.

- Includes a search bar to filter food items by name.

- Each food card displays essential information and a "View Details" button.

### Single Food Page (Public)

- Shows detailed information about a single food item, including the purchase
  count.

- A purchase button redirects users to the Food Purchase page.

### Food Purchase Page (Private)

- Contains a form with fields: Food Name, Price, Quantity, Buyer Name
  (read-only),
- Buyer Email (read-only), and Buying Date (auto-generated).

- On successful order placement, the information is stored in the database, and
  a
- toast notification is displayed.

### Gallery Page (Public)

- Displays at least 10 static images in a gallery format.

- Clicking on an image opens a lightbox for a larger view.

### My Foods Page (Private)

- Displays all food items added by the logged-in user.

- Includes an update button/icon to edit food details.

* Users can delete their own added food items.

### Add Food Page (Private)

- A form for adding new food items with fields: Food Name, Food Image, Category,
  Quantity, Price, Added By (auto-filled with logged-in user’s name and email),
  Food Origin, and a short description.

- On successful addition, a toast notification is displayed.

### My Orders Page (Private)

- Displays all food items ordered by the logged-in user.

- Each order card shows food info, buying date, and a delete button.

- The delete button allows users to remove orders from the list.

### 404 Page

- A custom 404 page with navigation back to the homepage for non-existing
  routes.

### Technologies Used

- Frontend: React.js, Tailwind CSS

- Backend: Node.js, Express.js

- Database: MongoDB

- Authentication: Firebase Authentication

- Hosting: Netlify (Frontend), Vercel (Backend)
