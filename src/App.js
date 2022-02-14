import './App.css';
import {Route, Link, Routes, Navigate } from 'react-router-dom';
import {useState} from 'react';
import CandidateList from './components/CandidateList'
import Home from './components/Home'

function App() {


  return (
    <div className="App">
      <nav>
        {/* links to route path */}
        <Link to = '/names'>SHOW CANDIDATES</Link>
        <Link to = '/'>HOME</Link>
      </nav>
      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path='/names' element={<CandidateList />} />
      </Routes>
    </div>
  );
}

export default App;
