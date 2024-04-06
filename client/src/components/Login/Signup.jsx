import React from "react";
import bgImg from "../../assets/images.jpg";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1 bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-40 px-12 py-10 shadow-lg backdrop-blur-md max-sm:px-8 md:w-[80%] w-[80%] xl:w-[50%] h-[70vh] flex justify-center items-center">
        <div className="text-white w-[100%] text-center flex justify-center items-center flex-col">
          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
              width="150"
              alt=""
              srcSet=""
            />
            <h1 className="mb-2 text-3xl">SignUp for an account</h1>
            <span className="text-gray-300">Enter Details</span>
          </div>
          <form
          onSubmit={handleSubmit}
          >
            <div className="mb-4 text-lg">
              <input
                className=" w-[100%] rounded-3xl border-none bg-blue-700 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                id="name"
                type="name"
                name="name"
                // onChange={onChange}
                // value={credentials.email}
                placeholder="Your Name..."
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className=" w-[100%] rounded-3xl border-none bg-blue-700 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                id="email"
                type="email"
                name="email"
                // onChange={onChange}
                // value={credentials.email}
                placeholder="id@email.com"
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className=" w-[100%] rounded-3xl border-none bg-blue-700 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                id="password"
                type="Password"
                name="password"
                // onChange={onChange}
                // value={credentials.password}
                placeholder="Password"
              />
            </div>
            <div className="mb-4 text-lg">
              <input
                className=" w-[100%] rounded-3xl border-none bg-blue-700 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                id="cpassword"
                type="Password"
                name="cpassword"
                // onChange={onChange}
                // value={credentials.password}
                placeholder="Confirm Password"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-blue-700 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-blue-950"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
