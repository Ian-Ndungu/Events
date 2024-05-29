import React from "react";

const Ticket = () => {
  return (
    <div className="mt-[140px]">
      <div className="mx-auto my-[20px]">
        <div className="w-full flex items-center justify-between px-[20px]">
          <div>
            <p className="text-[28px] font-bold leading-7 mb-[20px] text-justify">
              Upcoming events
            </p>
            <div className="items-center px-5 gap-[40px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px]">
                <img
                  src="/urbantone.png"
                  alt="screen"
                  className="w-full h-3/3 object-cover"
                />
                <div>
                  <p className="font-bold">URBANTONE FEST</p>
                  <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                    11 MAY
                  </p>
                  <p>sk8city Nairobi</p>
                </div>
              </div>
              <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px]">
                <img
                  src="/dawasesh.jpeg"
                  alt="screen"
                  className="w-full h-3/3 object-cover"
                />
                <div>
                  <p className="font-bold">DAWA SESH</p>
                  <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                    10 MAY
                  </p>
                  <p>Shelter, 33 Woodvale Groove, Westlands, Nairobi.</p>
                </div>
              </div>
              <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px]">
                <img
                  src="/element.jpeg"
                  alt="screen"
                  className="w-full h-3/3 object-cover"
                />
                <div>
                  <p className="font-bold">ELEMENT</p>
                  <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                    03 MAY
                  </p>
                  <p>Shelter, 33 Woodvale Groove, Westlands, Nairobi.</p>
                </div>
              </div>
              <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px]">
                <img
                  src="/element.jpeg"
                  alt="screen"
                  className="w-full h-3/3 object-cover"
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
            <div>
              <p className="text-[28px] font-bold leading-7 mb-[20px] text-justify mt-[40px]">
                Past Events
              </p>
              <div className="items-center px-5 gap-[40px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px]">
                  <img
                    src="/urbantone.png"
                    alt="screen"
                    className="w-full h-3/3 object-cover"
                  />
                  <div>
                    <p className="font-bold">URBANTONE FEST</p>
                    <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                      11 MAY
                    </p>
                    <p>sk8city Nairobi</p>
                  </div>
                </div>
                <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px]">
                  <img
                    src="/dawasesh.jpeg"
                    alt="screen"
                    className="w-full h-3/3 object-cover"
                  />
                  <div>
                    <p className="font-bold">DAWA SESH</p>
                    <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                      10 MAY
                    </p>
                    <p>Shelter, 33 Woodvale Groove, Westlands, Nairobi.</p>
                  </div>
                </div>
                <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px]">
                  <img
                    src="/element.jpeg"
                    alt="screen"
                    className="w-full h-3/3 object-cover"
                  />
                  <div>
                    <p className="font-bold">ELEMENT</p>
                    <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                      03 MAY
                    </p>
                    <p>Shelter, 33 Woodvale Groove, Westlands, Nairobi.</p>
                  </div>
                </div>
                <div className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px]">
                  <img
                    src="/element.jpeg"
                    alt="screen"
                    className="w-full h-3/3 object-cover"
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
      </div>
    </div>
  );
};

export default Ticket;
