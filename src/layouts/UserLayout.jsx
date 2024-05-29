import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import { Footer } from "antd/es/layout/layout";

const UserLayout = () => {
  return (
    <>
      <div>
        <div>
          <Navigation />
        </div>
        <div className="mt-[140px]">
          <Outlet />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default UserLayout;
