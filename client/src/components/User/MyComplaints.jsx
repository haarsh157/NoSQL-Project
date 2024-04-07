import React, { useEffect, useState } from "react";
import homeimg from "../../assets/svg/Home-white.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MyComplaints = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchAllComplaints = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/user/getcomplaints"
        );
        setComplaints(res.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };
    fetchAllComplaints();
  }, []);
  console.log(complaints);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        "http://localhost:4000/api/user/deletecomplaint/" + id
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckoff = async (id) => {
    try {
      await axios.get("http://localhost:4000/api/user/checkoffcomplaint/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const time = date.toLocaleTimeString(undefined, options);
    return time;
  };

  return (
    <>
      <div className="md:w-[85vw] w-[100%] sticky left-[20vw] bg-gray-800 text-white lg:p-8 p-1">
        <div style={{ padding: "0px 99px" }}>
          <div className="path p-2 flex items-center text-xl header">
            <img src={homeimg} alt="home" />
            <p className="pl-4 text-3xl">
              <Link to="/"> Home </Link> / My Complaints
            </p>
          </div>
        </div>
        {/* To be done through map */}
        <div className="complaints lg:p-6 p-2 text-black lg:text-2xl flex items-center flex-col">
          {complaints.map((complaint) => (
            <div
              key={complaint._id}
              className="comp lg:w-[90%] w-[90%] bg-slate-300 rounded-[30px] lg:p-8 lg:px-14 p-4 px-7 py-4 my-3 flex justify-between items-center md:flex-row flex-col"
            >
              <div className="md:w-[60%] w-[100%] flex items-center ">
                <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                  <p className="">Complaint ID:{complaint.complaint_id}</p>
                  <p className="">Complaint Type:{complaint.type}</p>
                </div>
                <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                  <p className="">Date: {formatDate(complaint.date)}</p>
                  <p className="">Time: {formatTime(complaint.date)}</p>
                </div>
                <div className="flex items-center justify-center flex-col lg:px-10 px-6">
                  <p className="">{complaint.description}</p>
                </div>
              </div>
              <div className="w-[40%] flex justify-center items-center lg:flex-row flex-row md:flex-col">
                <button
                  onClick={() => handleDelete(complaint._id)}
                  className="del flex justify-center items-center bg-red-600 text-white rounded-3xl px-8 py-1 my-1 mx-6"
                >
                  <span>Delete</span>
                </button>
                <button
                  onClick={() => handleCheckoff(complaint._id)}
                  className={`chkof ${
                    complaint.statusStudent === "done"
                      ? " bg-green-500"
                      : "bg-blue-600"
                  } flex justify-center items-center text-white rounded-3xl px-8 py-1 my-1 mx-6`}
                >
                  <span>
                    {complaint.statusStudent === "done" ? "DONE" : "Check Off"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyComplaints;
