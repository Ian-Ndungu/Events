import React from "react";

const Blog = () => {
  return (
    <div className="mt-[140px]">
      <div className="w-[80%] mx-auto my-[20px]">
        <div className="w-full flex items-center justify-between px-[20px] gap-[40px] ">
          <div className="max-w-md p-6 bg-white shadow-md rounded-lg w-[940px] h-[440px]">
            <img src="/blog1.jpeg" alt="screen" />
            <p>
              Wedding and event planning involves coordinating all aspects of a
              wedding or event to ensure it runs smoothly and meets the client's
              vision and expectations.{" "}
            </p>
          </div>
          <div className="max-w-md p-6 bg-white shadow-md rounded-lg w-[940px] h-[440px]">
            <img src="/blog3.jpeg" alt="screen" />
            <p>
              Eventy is your perfect ticketing and event management partner. We
              have built a better experience for both fans and event organizers,
              and shares your vision in events that will form the best memories
              in life.
            </p>
          </div>
          <div className="max-w-md p-6 bg-white shadow-md rounded-lg w-[940px] h-[440px]">
            <img src="/blog2.jpeg" alt="screen" />
            <p>
              If you’re looking for a professional team of wedding video
              directors, and wedding photographers for hire in Kenya you’re at
              the right spot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
