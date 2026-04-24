import { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // firebase add
    signInUser(email, password)
      .then((result) => {
        if (result.user) {
          toast.success("User Login Successfully!");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("User Not Found");
      });
  };

  return (
    <div className="about-us px-5 md:px-12 lg:px-20 2xl:px-60 py-10 md:py-20 lg:py-0 h-full lg:h-[91vh] 2xl:h-[90vh] flex items-center justify-center">
      <div
        data-aos="fade-up"
        className="w-full md:w-[60%] lg:w-[40%] 2xl:w-[45%] bg-[#ffff] p-6 border border-[#cccccc5d] rounded-2xl companie-card"
      >
        <div className="text-center pb-6 md:pb-7 lg:pb-8">
          <h2 className=" text-[22px] md:text-[24px] lg:text-[26px] 2xl:text-[28px] font-medium lg:font-semibold 2xl:font-bold">
            Welcome back
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#64748b]">
            Please enter your details to sign in
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-6">
          <form
            onSubmit={handleSignIn}
            className="flex flex-col gap-4 lg:gap-6"
          >
            <input
              className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
              type="email"
              name="email"
              required
              placeholder="Enter your Email"
            />
            <input
              className="border border-[#cccccc5d] bg-[#cccccc17] py-1.5 md:py-2 lg:py-3 focus:outline-0 px-2 lg:px-3 w-full rounded-lg"
              type="password"
              name="password"
              required
              placeholder="Enter your Password"
            />
            <div className="flex items-center justify-between">
              <fieldset className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-[14px] md:text-[16px] text-[#64748b]">
                  Remember me
                </span>
              </fieldset>
              <Link
                className="text-[14px] md:text-[16px] text-[#64748b] hover:text-[#1d4ed8] duration-500"
                to={""}
              >
                Forgot password ?
              </Link>
            </div>
            <button
              className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 rounded-lg text-[#ffff] text-[14px] md:text-[16px]"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center justify-between gap-3">
            <div className="h-0.5 w-full bg-[#64748b21]"></div>
            <div className="text-[14px] md:text-[16px] text-[#64748b]">OR</div>
            <div className="h-0.5 w-full bg-[#64748b21]"></div>
          </div>

          <SocialLogin />

          <p className="text-center">
            Don't have an account yet ? <Link to={"/sign-up"}>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
