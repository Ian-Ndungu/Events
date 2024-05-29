import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout"; // Ensure these paths are correct
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/user-layout/about" element={<About />} />
          <Route path="/user-layout/contactus" element={<Contact />} />
          <Route path="/user-layout/blog" element={<Blog />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;