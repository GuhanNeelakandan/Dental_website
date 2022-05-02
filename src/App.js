import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Components/Service';
import Pricing from './Components/Pricing';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Testimonial from './Components/Testimonial';



function App() {
  return (
    <><BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/testimonial" element={<Testimonial/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
