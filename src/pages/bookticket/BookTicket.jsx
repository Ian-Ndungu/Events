import { Modal, InputNumber, List } from "antd";
import { toast } from "react-toastify";
import { useState } from "react";

const BookTickets = ({ modalOpen, setModalOpen, fetchEventDetails }) => {
  const [tickets] = useState([
    { id: 1, type: "Standard", price: 50, available: 100 },
    { id: 2, type: "VIP", price: 100, available: 50 },
    { id: 3, type: "Student", price: 30, available: 200 },
  ]);
  const [selectedTickets, setSelectedTickets] = useState({});

  const handleTicketChange = (ticketId, value) => {
    setSelectedTickets({
      ...selectedTickets,
      [ticketId]: value,
    });
  };

  const handleBookTickets = async () => {
    try {
      // Dummy response to simulate successful booking
      const response = { status: 200 };
      if (response.status === 200 || response.status === 201) {
        toast.success("Tickets booked successfully");
        fetchEventDetails();
        setModalOpen(false);
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
                defaultValue={0}
                onChange={(value) => handleTicketChange(ticket.id, value)}
              />
            </List.Item>
          )}
        />
      </div>
    </Modal>
  );
};

export default BookTickets;
