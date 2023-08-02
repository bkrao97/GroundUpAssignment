import { Routes, Route } from "react-router-dom";
import Comment from "./Comment";
import Home from "./Home";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Login from "./Login";



function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/comment/:id" element={<Comment></Comment>} />
      </Routes>
    </>
  );
}

export default App;
