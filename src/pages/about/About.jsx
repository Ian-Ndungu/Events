import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const navigateToServices = () => {
    navigate("/user-layout/event-planning");
  };
  return (
    <div className="mt-[140px]">
      <div className="w-[80%] mx-auto my-[20px]">
        <div className="w-full flex items-center justify-between px-[20px]">
          <div className="w-[240%]">
            <img src="/about.jpeg" alt="screen" />
          </div>
          <div className="w-[40%]"></div>
          <p className="text-[16px] leading-7 mb-[20px] text-justify">
            Founded on the principles of elegance, innovation, and excellence,
            Eventy has been a trusted name in the event planning industry for
            many years. Our team of dedicated professionals brings together a
            wealth of experience and a deep understanding of the latest trends
            to create events that are not only visually stunning but also
            seamlessly executed. From large multinational corporations to local
            leading organisations and institutions, our conference clients
            demand excellence in every aspect of event planning and execution.
            They require a conference agency that can craft compelling event
            themes, assemble a network of top-tier suppliers, and bring
            innovative ideas to life.
          </p>
        </div>
        <div className="w-full mt-[40px]  gap-[30px] flex items-center justify-end">
          <button
            onClick={navigateToServices}
            className="bg-[#3c82f6] hover:bg-[#000000] text-white w-[180px] h-[54px] font-bold rounded"
          >
            Services
          </button>
        </div>
        <div className="mt-[60px]">
          <p className="text-[16px] leading-7 mb-[20px] text-justify">
            Our mission? To provide personalized, high-quality event planning
            and decor services that exceed our clients' expectations. We believe
            that every event is unique, and we strive to capture the essence of
            your vision, turning it into a beautifully crafted reality. From
            intimate gatherings to grand celebrations, we handle every detail
            with precision and care. And of course, we do it all with a smile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
