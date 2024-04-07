import React from "react";
import { Link } from "react-router-dom";
import homeimg from "../assets/svg/Home-black.png";
import comp from "../assets/svg/File_dock_add_fill.svg";
import leaveico from "../assets/svg/File_dock_fill.svg";
import guest from "../assets/svg/UsersFour.svg";
import mcomp from "../assets/svg/Folder_file_alt_diuotone_fill.svg";

const SideNav = (props) => {
  // console.log(props.isOpen)
  return (
    <>
      {/* sidenav */}
      <div
        id="navi"
        className={`bg-white text-gray-800 md:w-[15vw] md:block fixed w-[20vw] h-[100%] ${
          props.isOpen
            ? " block fixed md:static left-0 h-[100vh] pt-0 z-50 duration-300 overflow-hidden w-full"
            : " fixed md:left-0 left-[-100vw] "
        }`}
      >
        <nav>
          <ul className="space-y-2">
            <li className="opcion-con-desplegable">
              <Link
                to="/login"
                onClick={() => {
                  props.setIsOp(props.isOpen);
                }}
              >
                <div className=" md:hidden flex items-center justify-center p-4 transition-all duration-600 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center justify-center">
                    <span className=" px-4 font-bold text-xl">Login</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link
                to="/signup"
                onClick={() => {
                  props.setIsOp(props.isOpen);
                }}
              >
                <div className=" md:hidden flex items-center justify-center p-4 transition-all duration-600 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center justify-center">
                    <span className=" px-4 font-bold text-xl">Signup</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link
                to="/admin"
                onClick={() => {
                  props.setIsOp(props.isOpen);
                }}
              >
                <div className="flex items-center justify-between p-4 transition-all duration-600 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                    <img src={homeimg} alt="home" />
                    <span className=" px-4 font-bold text-xl">Home</span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link
                to="/admin/LeaveApproval"
                onClick={() => {
                  props.setIsOp(props.isOpen);
                }}
              >
                <div className="flex items-center justify-between p-4 transition-all duration-600 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                    <img src={comp} alt="comp" />
                    <span className=" px-4 font-bold text-xl">
                      Leave Form Approval
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link
                to="/admin/GuestRoomRecords"
                onClick={() => {
                  props.setIsOp(props.isOpen);
                }}
              >
                <div className="flex items-center justify-between p-4 transition-all duration-600 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                    <img src={guest} alt="guest" />
                    <span className=" px-4 font-bold text-xl">
                      Guest Room Records
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link
                to="/admin/ComplaintRecords"
                onClick={() => {
                  props.setIsOp(props.isOpen);
                }}
              >
                <div className="flex items-center justify-between p-4 transition-all duration-800 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                    <img src={leaveico} alt="leaveico" />
                    <span className=" px-4 font-bold text-xl">
                    Complaint Records
                    </span>
                  </div>
                </div>
              </Link>
            </li>
            <li className="opcion-con-desplegable">
              <Link
                to="/admin/StudentRecords"
                onClick={() => {
                  props.setIsOp(props.isOpen);
                }}
              >
                <div className="flex items-center justify-between p-4 transition-all duration-800 hover:bg-gray-300 hover:text-black text-xl">
                  <div className="flex items-center">
                    <img src={mcomp} alt="mcomp" />
                    <span className=" px-4 font-bold text-xl">
                      Student Records
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideNav;
