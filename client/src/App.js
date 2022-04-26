import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Carousel } from "./components/Carousel";
import  HomePage  from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/Login" element={<HomePage />}></Route>
          <Route path="/" element={<Carousel />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
