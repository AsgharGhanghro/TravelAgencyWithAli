// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Home from './Pages/Home';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './Component/Navbar';
import Gallery from './Component/Gallery';
import Serve from './Component/Serve';
import About from './Component/About';
import Login from './Component/Login';
import Contact from './Component/Contact';
import Protected from './Pages/Protected';

function App() {
  return ( 
    
    <div>
     <BrowserRouter>
        <Navbar />
           <Routes>
              <Route  path="/" element={<Protected Component={Home}/>} />
              <Route  path="/gallery" element={<Protected Component={Gallery} />} />
              <Route  path="/serve" element={<Protected Component={Serve} />} />
              <Route  path="/about" element={<Protected Component={About} />} />
              <Route  path="/login" element={<Login />} />
              <Route  path="/contact" element={<Protected Component={Contact} />} />
           </Routes>
         
     </BrowserRouter> 
     
    </div>
   
  );
}

export default App;
