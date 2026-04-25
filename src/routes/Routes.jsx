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
import MyProfile from "../components/Dashboard/Candidate/MyProfile";
import MyApplyJobs from "../components/Dashboard/Candidate/MyApplyJobs";
import MyResumes from "../components/Dashboard/Candidate/MyResumes";
import CreateResumes from "../components/Dashboard/Candidate/CreateResumes";
import EditResume from "../components/Dashboard/Candidate/EditResume";
import UpdateProfile from "../components/Dashboard/Candidate/UpdateProfile";
import EmployerProfile from "../components/Dashboard/Employer/EmployerProfile";
import MyJobs from "../components/Dashboard/Employer/MyJobs";
import SubmitJobs from "../components/Dashboard/Employer/SubmitJobs";
import JobApplicants from "../components/Dashboard/Employer/JobApplicants";
import EmployerProfileUpdate from "../components/Dashboard/Employer/EmployerProfileUpdate";

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
        path: "my-profile",
        Component: MyProfile,
      },
      {
        path: "my-apply-jobs",
        Component: MyApplyJobs,
      },
      {
        path: "my-resume",
        Component: MyResumes,
      },
      {
        path: "create-resume",
        Component: CreateResumes,
      },
      {
        path: "edit-resume",
        Component: EditResume,
      },
      {
        path: "update-profile",
        Component: UpdateProfile,
      },
      // Employer Route
      {
        path: "employer-profile",
        Component: EmployerProfile,
      },
      {
        path: "submit-jobs",
        Component: SubmitJobs,
      },
      {
        path: "my-jobs",
        Component: MyJobs,
      },
      {
        path: "job-applicants",
        Component: JobApplicants,
      },
      {
        path: "employer-profile-update",
        Component: EmployerProfileUpdate,
      },
    ],
  },
]);
