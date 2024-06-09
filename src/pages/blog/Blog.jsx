import React, { useState } from "react";
import { Modal } from "antd";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Define BlogDetails array
  const BlogDetails = [
    {
      id: 1,
      image: "/blog1.jpeg",
      title: "Wedding and Event Planning: Making Your Dreams a Reality",
      excerpt:
        "Planning a wedding or event can be both exciting and stressful. But with the help of a professional wedding and event planner, you can take the stress out of the process and ensure that your special day is everything you dreamed of.",
      content:
        "This blog post will delve into the world of wedding and event planning, covering aspects like:\n\n" +
        "- Understanding your vision and budget\n" +
        "- Choosing the right vendors\n" +
        "- Creating a detailed timeline\n" +
        "- Managing logistics and coordination\n" +
        "- Handling unexpected situations\n\n" +
        "By working with an experienced planner, you can relax and enjoy the planning process, knowing that your event is in good hands.",
    },
    {
      id: 2,
      image: "/blog2.jpeg",
      title:
        "The Power of Professional Photography: Capturing Memories that Last",
      excerpt:
        "Professional photography is an investment that will capture the precious moments of your wedding or event and ensure they are preserved for generations to come. But beyond simply documenting the day, a skilled photographer can also tell a story and evoke emotions through their artistry.",
      content:
        "Here's why investing in professional photography can be a game-changer for your special day:\n\n" +
        "- Capturing fleeting moments: Professional photographers know how to capture those fleeting moments that you might miss on your own, like the groom's emotional reaction when he sees the bride for the first time or the joyous laughter during the reception.\n" +
        "- Expert composition and lighting: Professional photographers have a keen eye for composition and lighting, ensuring your photos are visually stunning and showcase your event in its best light.\n" +
        "- High-quality editing and printing: Professional photographers also handle post-processing, enhancing the look and feel of your photos and ensuring they are printed with high-quality materials.\n\n" +
        "Professional photos are not just images; they are tangible memories that you can cherish for years to come. They can be used to create beautiful albums, share with loved ones, and relive those special moments whenever you wish.",
    },
    {
      id: 3,
      image: "/blog3.jpeg",
      title: "Simplified Ticket Booking: Tools and Strategies for Success",
      excerpt:
        "Ticket booking can be a complex task, especially for events with high demand or limited availability. But with the right tools and strategies in place, you can streamline the process and ensure a seamless ticket booking experience for your attendees.",
      content:
        "This blog post will explore some essential tools and strategies for successful ticket booking:\n\n" +
        "- Online ticketing platform: Utilize our company's online ticketing platform, which offers a user-friendly interface for attendees to easily book tickets from their desktop or mobile devices.\n" +
        "- Real-time availability tracking: Provide real-time updates on ticket availability through our platform, allowing attendees to see the number of remaining tickets and select their preferred seats.\n" +
        "- Secure payment processing: Our platform integrates with M-Pesa for secure and convenient payment processing. Attendees can make payments directly through their M-Pesa accounts, ensuring a seamless transaction experience.\n" +
        "- Mobile optimization: Our platform is optimized for mobile devices, ensuring that attendees can easily navigate the ticket booking process on smartphones and tablets.\n" +
        "- Customer support: We provide dedicated customer support channels to assist attendees with any questions or issues they may encounter during the ticket booking process.\n\n" +
        "By leveraging these tools and strategies on our platform, event organizers can simplify the ticket booking process, enhance attendee satisfaction, and ensure the success of their events.",
    },
  ];

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="mt-[140px]">
      <div className="w-[80%] mx-auto my-[20px]">
        <div className="w-full flex items-center justify-between px-[20px] gap-[40px] ">
          {BlogDetails.map((blog) => (
            <div
              key={blog.id}
              className="max-w-md p-6 bg-white shadow-md rounded-lg w-[940px] h-[440px] cursor-pointer"
              onClick={() => handleBlogClick(blog)}
            >
              <img src={blog.image} alt="blog" />
              <p
                className="overflow-hidden"
                style={{
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 5,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {blog.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Modal visible={!!selectedBlog} onCancel={handleCloseModal} footer={null}>
        {selectedBlog && (
          <>
            <img src={selectedBlog.image} alt="blog" />
            <h2 className="text-xl font-semibold">{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Blog;
