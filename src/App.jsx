import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Sparkles, Image as ImageIcon, FileText, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import ImageGenerator from './pages/ImageGenerator';
import ResumeGenerator from './pages/ResumeGenerator';
import './index.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container flex justify-between items-center">
        <Link to="/" className="logo text-gradient">
          <Sparkles className="w-6 h-6" />
          Spark AI
        </Link>
        
        {/* Desktop Nav */}
        <div className="nav-links" style={{ display: 'none' }} >
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/image-generator" className={`nav-link ${isActive('/image-generator')}`}>Image Gen</Link>
          <Link to="/resume-generator" className={`nav-link ${isActive('/resume-generator')}`}>Resume Gen</Link>
        </div>

        {/* Since vanilla css was requested without heavy frameworks, inline styles for mobile toggle logic simplicity here, though better handled with classes */}
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-only-flex">
          <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
          <Link to="/image-generator" className={`nav-link ${isActive('/image-generator')}`}>Image Gen</Link>
          <Link to="/resume-generator" className={`nav-link ${isActive('/resume-generator')}`}>Resume Gen</Link>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/image-generator" element={<ImageGenerator />} />
            <Route path="/resume-generator" element={<ResumeGenerator />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
