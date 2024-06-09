import React from "react";
import { useNavigate } from "react-router-dom";
import Ticket from "../ticket/Ticket";
import Eventplan from "../eventplan/Eventplan";

const Home = () => {
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
        <p className="font-extrabold text-white text-[50px] text-center">
          YOUR EVENT WILL STIR IMAGINATION AND,<br /> INSPIRE LOVE FOR YOUR BRAND.
        </p>
        <p className="text-white font-bold text-center">
          Eventy Events - We Plan & Run Your Conferences and Events
        </p>
        <div className="w-full mt-[40px] gap-[30px] flex items-center justify-center">
          <button
            onClick={navigateToServices}
            className="bg-[#3c82f6] hover:bg-[#000000] text-white w-[180px] h-[54px] font-bold rounded"
          >
            Services
          </button>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="w-[86%] mx-auto my-[20px]">
          <p className="text-[28px] font-bold leading-7 mb-[20px] text-justify mt-[40px] text-center">
            Event Planning
          </p>
          <Eventplan />
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="w-[90%] mx-auto my-[20px]">
          <div>
            <Ticket />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
