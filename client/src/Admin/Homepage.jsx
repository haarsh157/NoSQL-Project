import React, { useState } from "react";
import comp from "../assets/svg/Subtract.svg";
import leave from "../assets/svg/Subtract(1).svg";
import guest from "../assets/svg/UsersFour(1).svg";
import mcomp from "../assets/svg/Folder_file_alt_diuotone_fill(1).svg";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [shadow1, setShadow1] = useState();
  const [shadow2, setShadow2] = useState();
  const [shadow3, setShadow3] = useState();
  const [shadow4, setShadow4] = useState();

  const handleShadow1 = () => {
    setShadow1(
      "rgba(255, 255, 255, 0.29) 0px 4px 8px 0px, rgb(255, 255, 255) 0px 6px 20px 0px"
    );
  };
  const handleNoShadow1 = () => {
    setShadow1("");
  };

  const handleShadow2 = () => {
    setShadow2(
      "rgba(255, 255, 255, 0.29) 0px 4px 8px 0px, rgb(255, 255, 255) 0px 6px 20px 0px"
    );
  };
  const handleNoShadow2 = () => {
    setShadow2("");
  };

  const handleShadow3 = () => {
    setShadow3(
      "rgba(255, 255, 255, 0.29) 0px 4px 8px 0px, rgb(255, 255, 255) 0px 6px 20px 0px"
    );
  };
  const handleNoShadow3 = () => {
    setShadow3("");
  };

  const handleShadow4 = () => {
    setShadow4(
      "rgba(255, 255, 255, 0.29) 0px 4px 8px 0px, rgb(255, 255, 255) 0px 6px 20px 0px"
    );
  };
  const handleNoShadow4 = () => {
    setShadow4("");
  };

  return (
    <>
      <div className="md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1">
        <div className="flex flex-wrap flex-row w-[100%] justify-center lg:justify-normal">
          <div className="h-[420px] p-10">
            <Link to="/LeaveApproval">
              <div
                className="max-w-sm rounded-[40px] overflow-hidden shadow-lg h-[100%] bg-white text-gray-800 min-w-[300px] flex justify-between items-center flex-col transition-all duration-300"
                onMouseEnter={handleShadow1}
                onMouseLeave={handleNoShadow1}
                style={{
                  boxShadow: `${shadow1}`,
                }}
              >
                <div className="px-6 py-4 h-full pt-[55px]">
                  <img src={comp} alt="comp" className=" h-[150px]" />
                </div>
                <div className="px-6  bg-[#9752c2] w-[100%] h-[50px] flex justify-center items-center text-white text-3xl">
                  <p>Leave Form Approval</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cards h-[420px] p-10">
            <Link to="/Admin/GuestRoomRecords">
              <div
                className=" max-w-sm rounded-[40px] overflow-hidden shadow-lg h-[100%] bg-white text-gray-800 min-w-[300px] flex justify-between items-center flex-col transition-all duration-300"
                onMouseEnter={handleShadow2}
                onMouseLeave={handleNoShadow2}
                style={{
                  boxShadow: `${shadow2}`,
                }}
              >
                <div className="px-6 py-4 h-full pt-[55px]">
                  <img src={guest} alt="guest" className=" h-[150px]" />
                </div>
                <div className="px-6  bg-[#C35608] w-[100%] h-[50px] flex justify-center items-center text-white text-3xl">
                  <p>Guest Room Records</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cards h-[420px] p-10">
            <Link to="/Admin/ComplaintRecords">
              <div
                className=" max-w-sm rounded-[40px] overflow-hidden shadow-lg h-[100%] bg-white text-gray-800 min-w-[300px] flex justify-between items-center flex-col transition-all duration-300"
                onMouseEnter={handleShadow3}
                onMouseLeave={handleNoShadow3}
                style={{
                  boxShadow: `${shadow3}`,
                }}
              >
                <div className="px-6 py-4 h-full pt-[55px]">
                  <img src={leave} alt="leave" className=" h-[150px]" />
                </div>
                <div className="px-6  bg-[#f03a71] w-[100%] h-[50px] flex justify-center items-center text-white text-3xl">
                  <p>Complaint Records</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="cards h-[420px]  p-10">
            <Link to="/Admin/StudentRecords">
              <div
                className=" max-w-sm rounded-[40px] overflow-hidden shadow-lg h-[100%] bg-white text-gray-800 min-w-[300px] flex justify-between items-center flex-col transition-all duration-300"
                onMouseEnter={handleShadow4}
                onMouseLeave={handleNoShadow4}
                style={{
                  boxShadow: `${shadow4}`,
                }}
              >
                <div className="px-6 py-4 h-full pt-[55px]">
                  <img src={mcomp} alt="mcomp" className=" h-[150px]" />
                </div>
                <div className="px-6  bg-[#0bc1fb] w-[100%] h-[50px] flex justify-center items-center text-white text-3xl">
                  <p>Student Records</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
