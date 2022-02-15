import './App.css';
import {Route, Link, Routes, Navigate } from 'react-router-dom';
import {useState} from 'react';
import CandidateList from './components/CandidateList'
import Home from './components/Home'
import Form from './components/Form'
import OneCandidate from './components/OneCandidate';

function App() {


  return (
    <div className="App">
      <nav>
        {/* links to route path */}
        {/* <Link to = '/names'>SHOW CANDIDATES</Link> */}
        {/* <Link to = '/'>HOME</Link> */}
        <a href='https://www.fec.gov/data/candidates/?has_raised_funds=true&is_active_candidate=true'>Get FEC ID Number</a>
      </nav>
      <Routes>
        {/* <Route path ='/' element={<Home />} /> */}
        {/* <Route path='/names' element={<CandidateList />} /> */}
      </Routes>
      <Form />
      {/* <OneCandidate /> */}
    </div>
  );
}

export default App;
