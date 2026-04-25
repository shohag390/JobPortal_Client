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
import ErrorPage from "../components/ErrorPage";
import AllUser from "../components/Dashboard/Admin/AllUser";
import AllBlogs from "../components/Dashboard/Admin/AllBlogs";
import AllJobs from "../components/Dashboard/Admin/AllJobs";
import AddBlogs from "../components/Dashboard/Admin/AddBlogs";
import AddHeroImage from "../components/Dashboard/Admin/AddHeroImage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
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
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      // Admin Route
      {
        path: "all-user",
        Component: AllUser,
      },
      {
        path: "all-blogs",
        Component: AllBlogs,
      },
      {
        path: "all-jobs",
        Component: AllJobs,
      },
      {
        path: "add-blogs",
        Component: AddBlogs,
      },
      {
        path: "add-hero-image",
        Component: AddHeroImage,
      },
      // Candidate Route
      {
        path: "add-hero-image",
        Component: AddHeroImage,
      },
    ],
  },
]);
