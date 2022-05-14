import React, { useState, useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
// import { Login } from './components/Login';
// import Banner from './components/Banner';
import { Contact } from './components/Contact';
import UserProfile from './components/UserProfile';
// import Card from './components/Card';
// import { CardRow } from './components/CardRow';
// import { Map } from './components/Map';
import { GuestForm } from './components/GuestForm'
import BounceLoader from "react-spinners/BounceLoader";
import Dashboard from './components/Dashboard';
import HomePage from "./Pages/HomePage";
import Book from './components/Book';
import FillDetails from './components/FillDetails';

import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
//import Login from './components/Authentication/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import { Dashboard } from './components/Dashboard';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 800)
  }, [])
  return (
    <>
      {
        loading ?
          <div className="loader">
            <BounceLoader
              size={150}
              color={"powderblue"}
              loading={loading}
            />
          </div>

          :
          <div>
            <Navbar />
            <Routes>
              <Route path="/Dashboard" element={<Dashboard />}></Route>
              <Route path="/UserProfile" element={<UserProfile />}></Route>
              <Route path="/Login" element={<HomePage />}></Route>
              <Route path="/AdminLogin" element={<AdminLogin />}></Route>
              <Route path="/" element={<Carousel />}></Route>
              <Route path="/GuestForm" element={<GuestForm />}></Route>
              <Route path="/Book" element={<Book />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/FillDetails" element={<FillDetails />}></Route>
              <Route path="/Admindashboard" element={<AdminDashboard />}></Route>
              <Route path="/GuestForm" element={<GuestForm />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/AdminLogin" element={<AdminLogin />}></Route>
            </Routes>

            {/* <div className="map">
          <Map />
        </div> */}
            < Footer />
          </div >
      }

    </>
  );
}
export default App