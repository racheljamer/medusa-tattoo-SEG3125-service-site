import React from "react";
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Home from "./pages/home";
import TattooBooking from "./pages/tattooBooking";
import Confirmation from "./pages/confirmation";
import MainNav from "./components/mainNav";
import TattooRemovalBooking from "./pages/tattooRemovalBooking";
import PiercingBooking from "./pages/piercingBooking";


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bookTattoo" element={<TattooBooking/>}/>
            <Route path="/bookTattooRemoval" element={<TattooRemovalBooking/>}/>
            <Route path="/bookPiercing" element={<PiercingBooking/>}/>
            <Route path="/confirmed" element={<Confirmation/>}/>
        </Routes>
    </Router>
  );
}

export default App;
