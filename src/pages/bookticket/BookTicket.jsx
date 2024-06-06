import { Modal, InputNumber, List, Input, Button } from "antd";
import { toast } from "react-toastify";
import { useState } from "react";
import { processPayment } from "../../sdk/darajaApi";

const BookTickets = ({ modalOpen, setModalOpen, fetchEventDetails }) => {
  const [tickets] = useState([
    { id: 1, type: "Standard", price: 1, available: 100 },
    { id: 2, type: "VIP", price: 1, available: 50 },
    { id: 3, type: "Student", price: 1, available: 200 },
  ]);
  const [selectedTickets, setSelectedTickets] = useState({});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

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
        const ticket = tickets.find(t => t.id === parseInt(key));
        return sum + (ticket.price * selectedTickets[key]);
      }, 0);

      const paymentResponse = await processPayment(phoneNumber, totalAmount);
      if (paymentResponse.ResponseCode === "0") {
        const ticketNumber = generateTicketNumber();
        await sendTicketEmail(email, ticketNumber);
        toast.success("Tickets booked successfully. Check your email for the ticket.");
        fetchEventDetails();
        setModalOpen(false); // Close the modal after successful booking
        setPhoneNumber("");
        setEmail("");
        setSelectedTickets({});
        console.log("Tickets Data:", tickets); // Log tickets data to the console
      } else {
        toast.error("Failed to process payment");
      }
    } catch (error) {
      toast.error("Failed to book tickets");
    }
  };

  return (
    <Modal
      title="Book Tickets"
      centered
      open={modalOpen}
      onOk={handleBookTickets}
      onCancel={() => setModalOpen(false)}
      width={900}
    >
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

// Dummy function to generate a unique ticket number
const generateTicketNumber = () => {
  return `TICKET-${Math.floor(Math.random() * 1000000)}`;
};

// Dummy function to send the ticket to the user's email
const sendTicketEmail = async (email, ticketNumber) => {
  // Implement the logic to send the ticket email here
  console.log(`Sending ticket ${ticketNumber} to ${email}`);
};
