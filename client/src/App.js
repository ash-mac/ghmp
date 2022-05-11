import React, { useState, useEffect } from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { Login } from './components/Login';
// import Card from './components/Card';
// import { CardRow } from './components/CardRow';
// import { Map } from './components/Map';
import { GuestForm } from './components/GuestForm'
import { Book } from './components/Book'
import BounceLoader from "react-spinners/BounceLoader";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
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
          <Router>
            <Navbar />
            <Routes>
              <Route path="/Login" element={<Login />}>
              </Route>
              <Route path="/" element={<Carousel />}>
              </Route>
              <Route path="/GuestForm" element={<GuestForm />}>
              </Route>
              <Route path="/Book" element={<Book />}>
              </Route>
            </Routes>

            {/* <div className="map">
          <Map />
        </div> */}
            < Footer />
          </Router >
      }

    </>
  );
}
export default App