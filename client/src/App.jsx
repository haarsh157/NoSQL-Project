import { useState, useEffect } from "react";
import "./App.css";
import ApplyLeave from "./components/User/ApplyLeave";
import FileComplaint from "./components/User/FileComplaint";
import GuestRoomBook from "./components/User/GuestRoomBook";
import Home from "./components/User/Home";
import MyComplaints from "./components/User/MyComplaints";
import Navbar from "./components/User/Navbar";
import SideNavUser from "./components/User/SideNav";
import SideNavAdmin from "./Admin/SideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Admin from "./Admin/Homepage";
import LeaveApproval from "./Admin/LeaveApproval";
import GuestRoomRecords from "./Admin/GuestRoomRecords";
import ComplaintRecords from "./Admin/ComplaintRecords";
import StudentRecords from "./Admin/StudentRecords";

const USER_TYPES = {
  PUBLIC_USER: "public",
  NORMAL_USER: "student",
  ADMIN_USER: "caretaker",
};

function App() {
  const [isOp, setIsOp] = useState(true);
  const getIsOpen = (isOpen) => {
    // console.log(isOpen);
    setIsOp(isOpen);
  };
  console.log(isOp);

  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     navigate("/login");
  //   }
  // }, []);

  const [currentUserType, setCurrentUserType] = useState(
    localStorage.getItem("role")
  );

  const handleRoleChange = (role) => {
    setCurrentUserType(role);
  };
  // console.log(currentUserType);

  const UserElement = ({ children }) => {
    if (currentUserType === "student") {
      return <>{children}</>;
    } else if (!currentUserType) {
      <div>error</div>;
    }
  };

  const AdminElement = ({ children }) => {
    if (currentUserType === "caretaker") {
      return <>{children}</>;
    } else {
      <div>error</div>;
    }
  };
  console.log(currentUserType);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Router>
          <Navbar onclic={getIsOpen} isOp={!isOp} />
          <div
            className="flex min-h-[calc(100vh-80px)] w-[100%]"
            style={{
              fontFamily: "'EB Garamond', serif",
              minHeight: "calc(100vh-80px)",
            }}
          >
            <SideNavUser isOpen={!isOp} setIsOp={setIsOp} />
            {/* {currentUserType === "student" ? (
            ) : currentUserType === "caretaker" ? (
              <SideNavAdmin isOpen={!isOp} setIsOp={setIsOp} />
            ) : (
              <SideNavUser isOpen={!isOp} setIsOp={setIsOp} />
            )} */}

            <Routes>
              <Route
                exact
                path="/"
                element={
                  <UserElement>
                    <Home />
                  </UserElement>
                }
              />

              <Route
                exact
                path="/admin"
                element={
                  <AdminElement>
                    <Admin />
                  </AdminElement>
                }
              />
              <Route
                exact
                path="/login"
                element={<Login handleRoleChange={handleRoleChange} />}
              />
              <Route exact path="/signup" Component={Signup} />
              <Route exact path="/filecomplaint" Component={FileComplaint} />
              <Route exact path="/guestroombook" Component={GuestRoomBook} />
              <Route exact path="/applyforleave" Component={ApplyLeave} />
              <Route exact path="/mycomplaints" Component={MyComplaints} />
              <Route exact path="/LeaveApproval" Component={LeaveApproval} />
              <Route
                exact
                path="/GuestRoomRecords"
                Component={GuestRoomRecords}
              />
              <Route
                exact
                path="/ComplaintRecords"
                Component={ComplaintRecords}
              />
              <Route exact path="/StudentRecords" Component={StudentRecords} />
              <Route exact path="/admin" Component={Admin} />
              <Route exact path="*" Component={<div>Page not found</div>} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
