import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"; // Ensure these paths are correct
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Ticket from "./pages/ticket/Ticket";
import Eventplan from "./pages/eventplan/Eventplan";
import { useEffect, useState } from "react";
import Preloader from "./preloader/Preloader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/user-layout/about" element={<About />} />
            <Route path="/user-layout/contactus" element={<Contact />} />
            <Route path="/user-layout/blog" element={<Blog />} />
            <Route path="user-layout/ticket-booking" element={<Ticket />} />
            <Route path="/user-layout/event-planning" element={<Eventplan />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
