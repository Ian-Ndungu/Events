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
    <div className="mt-8 md:mt-16">
      <div className="mx-auto my-8 md:my-16">
        <div className="w-full px-4">
          <p className="text-2xl font-bold leading-7 mb-4 text-center md:text-left">
            Upcoming Events
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="max-w-xs p-4 bg-white shadow-md rounded-lg cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <img
                  src={event.src}
                  alt="Event"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div>
                  <p className="font-bold text-xl">{event.title}</p>
                  <p className="mt-2 text-sm font-semibold text-red-500">
                    {event.date}
                  </p>
                  <p className="text-sm">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-2xl font-bold leading-7 mb-4 text-center md:text-left mt-8 md:mt-16">
            Past Events
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="max-w-xs p-4 bg-white shadow-md rounded-lg cursor-not-allowed opacity-50"
                onClick={() => handleEventClick(event)}
              >
                <img
                  src={event.src}
                  alt="Event"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div>
                  <p className="font-bold text-xl">{event.title}</p>
                  <p className="mt-2 text-sm font-semibold text-red-500">
                    {event.date}
                  </p>
                  <p className="text-sm">{event.location}</p>
                </div>
              </div>
            ))}
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
