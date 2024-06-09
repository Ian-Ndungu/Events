import React, { useState } from "react";
import { Modal, Input, DatePicker, Select, Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Filming from "../filming/Filming";

const { Option } = Select;

const Eventplan = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: null,
    additionalDetails: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date, dateString) => {
    setFormData({
      ...formData,
      eventDate: dateString,
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      eventType: value,
    });
  };

  const handleBookingSubmit = () => {
    setModalOpen(true);
  };

  const confirmBooking = () => {
    // Perform booking API call here
    toast.success("Booking confirmed successfully!");
    setModalOpen(false);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row mx-4 md:mx-0">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-lg mb-8 md:mr-8">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            Book an Event Planning Service
          </h2>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <Input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Phone</label>
            <Input
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Event Type</label>
            <Select
              name="eventType"
              value={formData.eventType}
              onChange={handleSelectChange}
              className="w-full"
            >
              <Option value="wedding">Wedding</Option>
              <Option value="birthday">Birthday</Option>
              <Option value="corporate">Corporate Event</Option>
              <Option value="other">Other</Option>
            </Select>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Event Date</label>
            <DatePicker className="w-full" onChange={handleDateChange} />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Additional Details</label>
            <Input.TextArea
              name="additionalDetails"
              value={formData.additionalDetails}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex justify-end">
            <Button type="primary" onClick={handleBookingSubmit}>
              Submit
            </Button>
          </div>
        </div>
        <div className="w-full md:w-3/4 mx-auto md:ml-8">
          <div className="w-full md:w-[92%] md:m-[38px]">
            <p className="text-lg font-bold mb-4">
              Event Accessories And Equipment For Hire
            </p>
            <div className="text-sm">
              Are you looking for event accessories and equipment for hire in
              Kenya? We are the leading suppliers of event rental supplies in
              Kenya and we are known to provide top-notch services to
              individuals and event firms when it comes to event setting up and
              provision of state-of-the-art event equipment and accessories.
              Below are some of the event services and equipment we provide for
              hire in Kenya.
              <br />
              <ul className="list-disc ml-6">
                <li>Performance Stage and Podium for Hire</li>
                <li>LED Screens for Hire</li>
                <li>Sound Systems for Hire</li>
                <li>Lighting Systems for Hire</li>
              </ul>
              We also provide tents for hire and all services come with a
              professional setup team that will ensure all your event
              accessories and equipment are in place as per the plan and stick
              around in case of any changes and emergencies.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Filming />
      </div>
      <Modal
        title="Confirm Booking"
        centered
        open={modalOpen}
        onOk={confirmBooking}
        onCancel={() => setModalOpen(false)}
        width={600}
      >
        {/* Display booking confirmation details */}
      </Modal>
      <ToastContainer />
    </>
  );
};

export default Eventplan;
