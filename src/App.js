import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList/TaskList';
import About from './pages/About';

function App() {
  return (
    <Router>
      <nav style={{
        padding: '1rem',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <Link to="/" style={{ marginRight: '1rem', textDecoration: 'none' }}>
          Home
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
