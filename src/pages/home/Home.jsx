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
          <p className="font-bold ">Event Planning</p>
        </div>
      </div>
      <div className="mt-[20px]">
        <div className="w-[80%] mx-auto my-[20px]">
          <p className="font-bold">Tickets</p>
          <div className="w-full p-[30px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-full h-[420px]">
                <img
                  src="/urbantone.png"
                  alt="screen"
                  className="w-full h-2/3 object-cover"
                />
                <div>
                  <p className="font-bold">URBANTONE FEST</p>
                  <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                    11 MAY
                  </p>
                  <p>sk8city Nairobi</p>
                </div>
              </div>
              <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-full h-[420px]">
                <img
                  src="/dawasesh.jpeg"
                  alt="screen"
                  className="w-full h-2/3 object-cover"
                />
                <div>
                  <p className="font-bold">DAWA SESH</p>
                  <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                    10 MAY
                  </p>
                  <p>Shelter, 33 Woodvale Groove, Westlands, Nairobi.</p>
                </div>
              </div>
              <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-full h-[420px]">
                <img
                  src="/element.jpeg"
                  alt="screen"
                  className="w-full h-2/3 object-cover"
                />
                <div>
                  <p className="font-bold">ELEMENT</p>
                  <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                    03 MAY
                  </p>
                  <p>Shelter, 33 Woodvale Groove, Westlands, Nairobi.</p>
                </div>
              </div>
              <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-full h-[420px]">
                <img
                  src="/element.jpeg"
                  alt="screen"
                  className="w-full h-2/3 object-cover"
                />
                <div>
                  <p className="font-bold">ELEMENT</p>
                  <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                    03 MAY
                  </p>
                  <p>Shelter, 33 Woodvale Groove, Westlands, Nairobi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
