import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Carousel } from './components/Carousel';
import { Login } from './components/Login';
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
        <Footer />
      </Router >
    </>
  );
}

export default App;
