// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Use Link for internal navigation */}
          <li><Link to="/about">About Me</Link></li> {/* Use Link for internal navigation */}
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return <h1>Welcome to Let’s Talk About Data!</h1>;
}

export default App;
