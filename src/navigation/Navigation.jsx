import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const Navigation = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <NavLink to="/user-layout/event-filming" className="text-[16px]">
          Event filming & Photography
        </NavLink>
      ),
      key: "0",
    },
    {
      label: (
        <NavLink to="/user-layout/event-planning" className="text-[16px]">
          Event & Wedding Planning
        </NavLink>
      ),
      key: "1",
    },
    {
      label: (
        <NavLink to="/user-layout/ticket-booking" className="text-[16px]">
          Ticket Booking
        </NavLink>
      ),
      key: "2",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <div className="w-[100%] fixed top-0 z-50 h-[120px] bg-white border-b-[1px] shadow-md">
      <div className="flex items-center h-full justify-between w-[95%] mx-auto">
        <div onClick={() => navigate("/")} className="font-bold cursor-pointer">
          <img src="" alt="logo" className="w-[200px] " />
        </div>
        <nav className="flex font-bold">
          <ul className="flex items-center gap-[20px]">
            <NavLink to="/" className="text-[16px]">
              Home
            </NavLink>
            <NavLink to="/user-layout/about" className="text-[16px]">
              About Us
            </NavLink>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Services
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <NavLink to="/user-layout/contactus" className="text-[16px]">
              Contact Us
            </NavLink>
            <NavLink to="/user-layout/blog" className="text-[16px]">
              Blog
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
