import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const SocialLogin = () => {
  const { signInWithGoogle } = use(AuthContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          toast.success("User Login Successfully!");
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("Something Error!");
      });
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center gap-2 lg:gap-3 bg-[#eeeeee] hover:bg-[#dbdbdb] duration-500 py-1.5 md:py-2 lg:py-3 rounded-lg text-[#000000] text-[14px] md:text-[16px]"
    >
      <FcGoogle className="text-[18px] md:text-[20px] lg:text-[22px]" />
      <span className="text-[14px] md:text-[16px]">Sign up with Google</span>
    </button>
  );
};

export default SocialLogin;
