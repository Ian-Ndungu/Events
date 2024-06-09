import React, { useState } from "react";
import BookTickets from "../bookticket/BookTicket";

const Ticket = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    if (!event.isPast) {
      setSelectedEvent(event);
      setModalOpen(true);
    }
  };

  const upcomingEvents = [
    { id: 1, src: "/urbantone.png", title: "URBANTONE FEST", date: "11 MAY", location: "sk8city Nairobi", isPast: false },
    { id: 2, src: "/dawasesh.jpeg", title: "DAWA SESH", date: "10 MAY", location: "Shelter, 33 Woodvale Groove, Westlands, Nairobi.", isPast: false },
    { id: 3, src: "/element.jpeg", title: "ELEMENT", date: "03 MAY", location: "Shelter, 33 Woodvale Groove, Westlands, Nairobi.", isPast: false }
  ];

  const pastEvents = [
    { id: 4, src: "/urbantone.png", title: "URBANTONE FEST", date: "11 MAY", location: "sk8city Nairobi", isPast: true },
    { id: 5, src: "/dawasesh.jpeg", title: "DAWA SESH", date: "10 MAY", location: "Shelter, 33 Woodvale Groove, Westlands, Nairobi.", isPast: true },
    { id: 6, src: "/element.jpeg", title: "ELEMENT", date: "03 MAY", location: "Shelter, 33 Woodvale Groove, Westlands, Nairobi.", isPast: true }
  ];

  return (
    <div className="mt-[140px]">
      <div className="mx-auto my-[20px]">
        <div className="w-full flex items-center justify-between px-[20px]">
          <div>
            <p className="text-[28px] font-bold leading-7 mb-[20px] text-justify">
              Upcoming events
            </p>
            <div className="items-center px-5 gap-[40px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map(event => (
                <div
                  key={event.id}
                  className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px] cursor-pointer"
                  onClick={() => handleEventClick(event)}
                >
                  <img
                    src={event.src}
                    alt="screen"
                    className="w-full h-3/3 object-cover"
                  />
                  <div>
                    <p className="font-bold">{event.title}</p>
                    <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                      {event.date}
                    </p>
                    <p>{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[28px] font-bold leading-7 mb-[20px] text-justify mt-[40px]">
                Past Events
              </p>
              <div className="items-center px-5 gap-[40px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map(event => (
                  <div
                    key={event.id}
                    className="max-w-xs p-4 bg-white shadow-md rounded-lg w-[360px] h-[420px] cursor-not-allowed"
                    onClick={() => handleEventClick(event)}
                  >
                    <img
                      src={event.src}
                      alt="screen"
                      className="w-full h-3/3 object-cover"
                    />
                    <div>
                      <p className="font-bold">{event.title}</p>
                      <p className="mt-2 text-[14px] font-bold text-[#ef4444]">
                        {event.date}
                      </p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedEvent && (
        <BookTickets
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          event={selectedEvent}
          fetchEventDetails={() => {}} // Add your event detail fetching function here
        />
      )}
    </div>
  );
};

export default Ticket;
