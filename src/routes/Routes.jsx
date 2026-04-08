import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import Jobs from "../pages/Jobs";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Dashboard from "../layouts/Dashboard";
import DashboardHome from "../components/Dashboard/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/jobs",
        Component: Jobs,
      },
      {
        path: "/blogs",
        Component: BlogPage,
      },
      {
        path: "/contacts-us",
        Component: ContactPage,
      },
      {
        path: "/sign-in",
        Component: SignIn,
      },
      {
        path: "/sign-up",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
    ],
  },
]);
