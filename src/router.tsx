// src/router.tsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./pages/App"; // A root layout component
import LoginPage from "./pages/login"
// import Home from "./home"; 
// import Product from "./product"; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);

export default router;