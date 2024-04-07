import React, { useState } from "react";
import userf from "../../assets/svg/User_fill(1).svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-white transition ease transform duration-300`;
  const onclick = () => {
    props.onclic(isOpen);
    setIsOpen(!props.isOpen);
    setIsOpen(!isOpen);
  };
  // console.log(isOpen);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      {/* Topnav */}
      <nav className="bg-blue-500 md:px-20 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div>
          <h1
            className="text-white lg:text-5xl md:text-3xl text-3xl font-semibold lobster"
            style={{
              fontFamily: "'Lobster', cursive",
            }}
          >
            <Link to="/">HostelUtilities</Link>
          </h1>
        </div>
        <div className="block md:hidden">
          {/* Hamburger menu */}
          <button
            className=" z-20 flex flex-col h-12 w-12 justify-center items-center group"
            onClick={() => {
              setIsOpen(!isOpen);
              onclick();
            }}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-[7px] opacity-50 group-hover:opacity-100"
                  : "opacity-70 group-hover:opacity-100"
              }`}
            />
            <div
              className={` z-20 ${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-100"
              }`}
            />
            <div
              className={` z-20 ${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-[7px] opacity-50 group-hover:opacity-100"
                  : "opacity-70 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        <div className="md:flex hidden items-center space-x-4">
          <img src={userf} alt="userf" />
          {!localStorage.getItem("token") ? (
            <>
              <Link
                to="/login"
                className="text-white text-2xl rounded-2xl px-3 py-[2px] bg-blue-900 hover:bg-blue-700 transition-all duration-300"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white text-2xl rounded-2xl px-3 py-[2px] bg-blue-900 hover:bg-blue-700 transition-all duration-300"
                style={{
                  fontFamily: "'EB Garamond', serif",
                }}
              >
                Signup
              </Link>
            </>
          ) : (
            <button
              className="text-white text-2xl rounded-2xl px-3 py-[2px] bg-blue-900 hover:bg-blue-700 transition-all duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
