import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import India from './pages/India';
import Us from './pages/Us';
import Greece from './pages/Greece';
import './App.css';

function Home() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <Link to="/india" className="nav-link">India</Link>
        <Link to="/us" className="nav-link">US</Link>
        <Link to="/greece" className="nav-link">Greece</Link>
      </nav>
      <div className="home-content">
        <h1>Hello!</h1>
        <p>Welcome to my simple React app.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/india" element={<India />} />
        <Route path="/us" element={<Us />} />
        <Route path="/greece" element={<Greece />} />
      </Routes>
    </Router>
  );
}

export default App;
