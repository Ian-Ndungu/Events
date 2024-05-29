import React from "react";
import { useNavigate } from "react-router-dom";

const home = () => {
  const navigate = useNavigate();
  const navigateToServices = () => {
    navigate("/user-layout/event-planning");
  };
  return (
    <>
      <div
        style={{
          backgroundImage: "url(/background.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <p className="font-extrabold text-white text-[50px]">
          YOUR EVENT WILL STIR IMAGINATION AND ,<br />
          INSPIRE LOVE FOR YOUR BRAND.
        </p>
        <p className="text-white font-bold">
          Eventy Events - We Plan & Run Your Conferences and Events
        </p>
        <div className="w-full mt-[40px]  gap-[30px] flex items-center justify-center">
          <button
            onClick={navigateToServices}
            className="bg-[#3c82f6] hover:bg-[#000000] text-white w-[180px] h-[54px] font-bold rounded"
          >
            Services
          </button>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="w-[80%] mx-auto my-[20px]">
          <p className="font-bold font-mono ">Event Planning</p>
        </div>
      </div>
    </>
  );
};

export default home;
