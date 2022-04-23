import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './Components/Service';



function App() {
  return (
    <><BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
