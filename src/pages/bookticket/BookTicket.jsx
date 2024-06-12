import { Modal, InputNumber, List, Input, Button } from "antd";
import { toast } from "react-toastify";
import { useState } from "react";
import { processPayment } from "../../sdk/darajaApi";
import { init } from "emailjs-com";

const BookTickets = ({ modalOpen, setModalOpen, fetchEventDetails, event }) => {
  const [tickets] = useState([
    { id: 1, type: "Standard", price: 1, available: 100 },
    { id: 2, type: "VIP", price: 1, available: 50 },
    { id: 3, type: "Student", price: 1, available: 200 },
  ]);
  const [selectedTickets, setSelectedTickets] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const generateTicketNumber = () => {
    return `TICKET-${Math.floor(Math.random() * 1000000)}`;
  };

  const handleTicketChange = (ticketId, value) => {
    setSelectedTickets({
      ...selectedTickets,
      [ticketId]: value,
    });
  };

  const handleBookTickets = async () => {
    try {
      if (!phoneNumber || !email) {
        toast.error("Please enter your phone number and email.");
        return;
      }

      const totalAmount = Object.keys(selectedTickets).reduce((sum, key) => {
        const ticket = tickets.find((t) => t.id === parseInt(key));
        return sum + ticket.price * selectedTickets[key];
      }, 0);

      console.log("Phone Number:", phoneNumber);
      console.log("Email:", email);
      console.log("Selected Tickets:", selectedTickets);
      console.log("Total Amount:", totalAmount);

      const paymentResponse = await processPayment(phoneNumber, totalAmount);
      console.log("Payment Response:", paymentResponse);

      if (paymentResponse.ResponseCode === "0") {
        const ticketNumber = generateTicketNumber();
        sendTicketEmail(email, ticketNumber);
        toast.success(
          "Tickets booked successfully. Check your email for the ticket."
        );
        fetchEventDetails();
        setModalOpen(false); // Close the modal after successful booking
        setPhoneNumber("");
        setEmail("");
        setSelectedTickets({});
      } else {
        toast.error("Failed to process payment");
      }
    } catch (error) {
      console.error("Error booking tickets:", error);
      toast.error("Failed to book tickets");
    }
  };

  init("uZ9YRGKNjK1faDgv0");

  const sendTicketEmail = async (email, ticketNumber) => {
    try {
      const templateParams = {
        to_email: email,
        ticket_number: ticketNumber,
      };

      const serviceID = "eventy_ag065gm";
      const templateID = "ytemplate_kwu44gw";
      const userID = "uZ9YRGKNjK1faDgv0";

      await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log(`Sending ticket ${ticketNumber} to ${email}`);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <Modal
      title={`Book Tickets for ${event.title}`}
      centered
      open={modalOpen}
      onOk={handleBookTickets}
      onCancel={() => setModalOpen(false)}
      width={900}
    >
      <div>
        <p>{event.title}</p>
        <p>{event.date}</p>
        <p>{event.location}</p>
      </div>
      <div className="min-h-[300px]">
        <List
          itemLayout="horizontal"
          dataSource={tickets}
          renderItem={(ticket) => (
            <List.Item>
              <List.Item.Meta
                title={`${ticket.type} - $${ticket.price}`}
                description={`Available: ${ticket.available}`}
              />
              <InputNumber
                min={0}
                max={ticket.available}
                value={selectedTickets[ticket.id] || 0}
                onChange={(value) => handleTicketChange(ticket.id, value)}
              />
            </List.Item>
          )}
        />
      </div>
      <Input
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: 16 }}
      />
    </Modal>
  );
};

export default BookTickets;
