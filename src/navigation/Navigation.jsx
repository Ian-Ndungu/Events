import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Space,Menu } from "antd";

const Navigation = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const Respo = [
    <NavLink key="home" to="/" className="text-[16px]">
      Home
    </NavLink>,
    <NavLink key="event" to="/user-layout/event-planning" className="text-[16px]">
      Event & Wedding Planning
    </NavLink>,
    <NavLink key="ticket" to="/user-layout/ticket-booking" className="text-[16px]">
      Ticket Booking
    </NavLink>,
    <NavLink key="about" to="/user-layout/about" className="text-[16px]">
      About Us
    </NavLink>,
    <NavLink key="contact" to="/user-layout/contactus" className="text-[16px]">
      Contact Us
    </NavLink>,
    <NavLink key="blog" to="/user-layout/blog" className="text-[16px]">
      Blog
    </NavLink>,
  ];

  return (
    <div className="w-full fixed top-0 z-50  h-[120px] bg-white border-b-[1px] shadow-md">
      <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto px-4 py-3">
        <div
          onClick={() => navigate("/")}
          className="font-bold cursor-pointer flex items-center"
        >
          <img src="/logo.jpeg" alt="logo" className="w-16 mr-2" />
          <p className="font-extrabold text-xl">VeNtY</p>
        </div>
        <nav className="flex items-center space-x-6 md:hidden">
          <MenuOutlined
            className="text-xl cursor-pointer"
            onClick={toggleMenu}
          />
          {menuVisible && (
            <Dropdown
              overlay={
                <Menu>
                  {Respo.map((item, index) => (
                    <Menu.Item key={index}>{item}</Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()} className="text-xl cursor-pointer">
                <Space>
                  Menu <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          )}
        </nav>
        <nav className="hidden md:flex font-bold">
          <ul className="flex items-center gap-6">
            {Respo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
