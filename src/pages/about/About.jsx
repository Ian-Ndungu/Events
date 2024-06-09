import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const navigateToServices = () => {
    navigate("/user-layout/event-planning");
  };

  return (
    <div className="mt-16 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full md:w-4/5">
          <img src="/about.jpeg" alt="About Eventy" className="w-full" />
        </div>
        <div className="w-full md:w-4/5">
          <p className="text-base md:text-lg leading-7 mb-8 text-justify">
            Founded on the principles of elegance, innovation, and excellence,
            Eventy has been a trusted name in the event planning industry for
            many years. Our team of dedicated professionals brings together a
            wealth of experience and a deep understanding of the latest trends
            to create events that are not only visually stunning but also
            seamlessly executed.
          </p>
          <div className="flex justify-end">
            <button
              onClick={navigateToServices}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Services
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <p className="text-base md:text-lg leading-7 mb-8 text-justify">
          Our mission? To provide personalized, high-quality event planning and
          decor services that exceed our clients' expectations. We believe that
          every event is unique, and we strive to capture the essence of your
          vision, turning it into a beautifully crafted reality. From intimate
          gatherings to grand celebrations, we handle every detail with
          precision and care. And of course, we do it all with a smile.
        </p>
      </div>
    </div>
  );
};

export default About;
