Amazon Clone

A modern e-commerce web application with a React frontend and Node.js backend, including Firebase integration for hosting and serverless functions. This project showcases core shopping flows such as product browsing, search, cart, checkout, orders, and authentication.

## 🚀 Overview

This Amazon-style clone is a full-stack web application. The frontend provides a responsive, performant UI built with React and Vite. The backend uses Node.js/Express, and the project optionally integrates Firebase (Hosting and Cloud Functions) for deployment and serverless capabilities.

## ✨ Features

### Shopping & Catalog
- Product listing with carousel and category browsing
- Product detail view with images and descriptions
- Search results page

### Cart & Checkout
- Add/remove items from cart
- Cart summary with totals
- Checkout/payment flow

### Orders
- Place orders
- View past orders and details

### Authentication
- Protected routes for checkout and orders
- Client-side route protection

### UI/UX
- Responsive layout
- Loading states and feedback
- Currency formatting

## 🛠️ Tech Stack

### Frontend
- **React** (Vite) – UI framework and tooling
- **React Router** – Client-side routing
- **Axios** – HTTP client
- **CSS Modules** – Component-scoped styles

### Backend
- **Node.js** – Runtime environment
- **Express.js** – Web framework

### Cloud & Tooling
- **Firebase** – Hosting and Cloud Functions (optional)
- **npm** – Package management

## 📁 Project Structure

```
Amazon Clone/
├── BackEnd/                    # Node.js/Express backend
│   ├── index.js               # Server entry
│   ├── package.json
│   └── node_modules/
├── FrontEnd/                   # React (Vite) frontend
│   ├── firebase.json          # Firebase hosting config (optional)
│   ├── functions/             # Firebase Cloud Functions (optional)
│   │   ├── index.js
│   │   └── package.json
│   ├── public/                # Static assets (favicons, logos)
│   ├── src/
│   │   ├── Api/               # Axios setup and API endpoints
│   │   ├── Components/        # Reusable UI components
│   │   ├── Pages/             # App pages (Cart, Order, Payment, etc.)
│   │   ├── Utility/           # Helpers (Firebase init, reducer, etc.)
│   │   ├── App.jsx            # Root component
│   │   └── main.jsx           # App bootstrap
│   ├── index.html
│   ├── package.json
│   └── node_modules/
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (LTS recommended)
- Git
- Optional: Firebase CLI (for hosting/functions)

### 1) Clone the repository
```bash
git clone <your-repo-url>.git
cd "Amazon Clone"
```

### 2) Backend setup
```bash
cd BackEnd
npm install
```

Create a `.env` file in `BackEnd/` as needed (example):
```env
PORT=3001
# Add any other backend environment values you need
```

Start the backend:
```bash
npm start
# or, if available
npm run dev
```

### 3) Frontend setup
```bash
cd ../FrontEnd
npm install
```

Create a `.env` file in `FrontEnd/` for Vite (example):
```env
VITE_API_BASE_URL=http://localhost:3001
# Add any Firebase/other public config as VITE_* variables
```

Start the frontend dev server:
```bash
npm run dev
```

Now open the app at the URL printed by Vite (typically http://localhost:5173).

### 4) Optional: Firebase (Hosting & Functions)
- Ensure you have Firebase CLI installed and configured (`npm i -g firebase-tools`).
- In `FrontEnd/`, you can deploy hosting as configured by `firebase.json`.
- In `FrontEnd/functions/`, install and deploy functions if desired:
```bash
cd FrontEnd/functions
npm install
# local emulation
firebase emulators:start
# or deploy (requires Firebase project)
firebase deploy --only functions,hosting
```

## 🔐 Authentication & Protected Routes
- Client-side route protection is implemented via a `ProtectedRoute` component.
- Ensure your API and token handling are aligned between frontend and backend.

## 📝 API Endpoints
Backend endpoints are defined by the Express server in `BackEnd/index.js` and consumed via Axios. Frontend endpoint paths are organized in `FrontEnd/src/Api/endPoints.js`.

Common operations include:
- Products: list, detail
- Cart: add, remove, fetch
- Orders: create, list
- Auth: login, logout (and token handling)

Refer to code for the authoritative set of routes.

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "feat: add YourFeature"`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a Pull Request

## 📄 License
This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors
- Development Team – Initial work – [YourNameOrTeam]

## 🙏 Acknowledgments
- React community for documentation and ecosystem
- Express.js team for the backend framework
- Firebase team for hosting/functions tooling
- All contributors and testers

## 📞 Support
For support, please open an issue in the repository.

---

Note: Configure environment variables and start the backend before running the frontend. Update `VITE_API_BASE_URL` to point to your backend server.


