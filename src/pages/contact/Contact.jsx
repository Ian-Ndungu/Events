import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    toast.success("Message sent successfully!");
  };

  return (
    <div className="mt-[140px]">
      <div className="w-[80%] mx-auto my-[20px]">
        <div>
          <p className="text-[28px] font-bold ">FOR INQUIRIES OR QUESTIONS</p>
          <p>
            Please use the form below or email us on hello@waridievents.com.
          </p>
        </div>
        <div className="flex justify-center items-start space-x-6 p-6">
          <div className="w-3/5">
            <div className="max-w-md p-6 bg-white shadow-md rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-b border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border-b border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="w-3/5">
            <img
              src="/contact.jpeg"
              alt="Contact Us"
              className="w-full h-[420px] rounded-lg"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
