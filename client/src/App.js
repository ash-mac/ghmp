import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { Login } from './components/Login';
import Card from './components/Card';
import { Map } from './components/Map';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />}>
          </Route>
          <Route path="/" element={<Carousel />}>
          </Route>
        </Routes>
        <div className="cardRow">
          <Card
            title='Events'
            imageUrl='.\calendar.png'
            body='Alumni Meets, Research Conferences, Fests, find all upcoming events here.' />
          <Card
            title='Meetings'
            imageUrl='.\conference.png'
            body='Meeting Room Bookings. Book a conference room for upcoming meets' />
          <Card
            title='Guest Rooms'
            imageUrl='.\building.png'
            body='A researcher, alumni or a parent, book rooms for all your needs here' />
        </div>
        {/* <div className="map">
          <Map />
        </div> */}
        < Footer />
      </Router >
    </>
  );
}
export default App