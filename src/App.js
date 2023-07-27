import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SamplePost from './pages/SamplePost';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/samplepost"
          element={<SamplePost />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
