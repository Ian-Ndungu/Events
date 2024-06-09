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
    minHeight: "70vh", // Change height to minHeight for responsiveness
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
    padding: "0 20px", // Add padding for smaller screens
  }}
>
  <p className="font-extrabold text-white text-4xl md:text-5xl lg:text-6xl text-center mb-4">
    YOUR EVENT WILL STIR IMAGINATION AND,<br /> INSPIRE LOVE FOR YOUR BRAND.
  </p>
  <p className="text-white font-bold text-lg md:text-xl lg:text-2xl text-center mb-8">
    Eventy Events - We Plan & Run Your Conferences and Events
  </p>
  <div className="w-full mt-4 md:mt-8 gap-4 md:gap-8 flex items-center justify-center">
    <button
      onClick={navigateToServices}
      className="bg-[#3c82f6] hover:bg-[#000000] text-white w-48 md:w-56 h-12 md:h-14 font-bold rounded"
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
