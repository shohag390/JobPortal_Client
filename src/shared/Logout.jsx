import React, { use } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Logout = () => {
  const { signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("User Sign Out!");
      })
      .catch((error) => {
        toast.error("Something Error!");
      });
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-[#1d4ed8] hover:bg-[#003ad8] duration-500 py-1.5 md:py-2 lg:py-3 px-6 md:px-8 lg:px-10 rounded-full text-[#ffff] text-[14px] md:text-[16px]"
    >
      Logout
    </button>
  );
};

export default Logout;
