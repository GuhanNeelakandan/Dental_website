import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Service from "./Components/Service";
import Pricing from "./Components/Pricing";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Testimonial from "./Components/Testimonial";
import youtube from "./Images/youtube.png";
import whatsapp from "./Images/whatsapp.png";
import instagram from "./Images/instagram.png";
import gmail from "./Images/gmail.png";
import map from "./Images/google-maps.png";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />

        <div class="sticky-left-container">
          <ul class="sticky-left">
            <a href="https://www.youtube.com/@Neosmiledental" target="_balnk">
              <li>
                <img width="32" height="32" title="" alt="" src={youtube} />
                <p>Youtube</p>
              </li>
            </a>

            <a href="https://wa.me/7708282837" target="_balnk">
              <li>
                <img width="32" height="32" title="" alt="" src={whatsapp} />
                <p>Whatsapp</p>
              </li>
            </a>
            <a
              href="https://www.instagram.com/neosmile_dental/?igshid=ZmRlMzRkMDU%3D"
              target="_blank"
            >
              <li>
                <img width="32" height="32" title="" alt="" src={instagram} />
                <p>Instagram</p>
              </li>
            </a>
            <a
              className="email ding"
              href="mailto:neosmiledentalomr@gmail.com"
              target="_blank"
            >
              <li>
                <img width="32" height="32" title="" alt="" src={gmail} />
                <p>Email</p>
              </li>
            </a>

            <a href="https://www.google.com/maps/place/NEOSMILE+DENTAL+AND+IMPLANT+CENTRE/@12.8875614,80.2285973,15z/data=!4m12!1m6!3m5!1s0x0:0x90a145a0ad547d96!2sNEOSMILE+DENTAL+AND+IMPLANT+CENTRE!8m2!3d12.8875614!4d80.2285973!3m4!1s0x0:0x90a145a0ad547d96!8m2!3d12.8875614!4d80.2285973" target="_blank">
              <li>
                <img width="32" height="32" title="" alt="" src={map} />
                <p>Location</p>
              </li>
            </a>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/testimonial" element={<Testimonial />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
