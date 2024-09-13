import React from "react";
import logo from "../assets/logos_firebase.svg";

const Navbar = () => {
  return (
    <>
      <div className=" h-[50px] bg-slate-300 rounded-lg m-4 flex justify-center items-center gap-2">
        <img src={logo} alt="logo" />
        <h2 className="text-xl font-sans font-medium text-gray-950">
          Firebase Contact App
        </h2>
      </div>
    </>
  );
};

export default Navbar;
