import React from "react";
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Confirmation from "./pages/confirmation";
import MainNav from "./components/mainNav";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/booking/piercing" element={<Booking/>}>
                <Route path="/booking/tattoo" element={<Booking/>}/>
                <Route path="/booking/tattooremoval" element={<Booking/>}/>
                <Route path="/confirmation" element={<Confirmation/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
