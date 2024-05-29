import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation/Navigation";


const MainLayout = () => {
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

        </div>
      </div>
    </>
  );
};

export default MainLayout;