import './App.css';
import {Route, Link, Routes, Navigate } from 'react-router-dom';
import {useState} from 'react';
import Form from './components/Form'


function App() {


  return (
    <div className="App">      
    <h1>Campaign Finance Tracker</h1>
    <hr />
        <a href='https://www.fec.gov/data/candidates/?has_raised_funds=true&is_active_candidate=true' target='_blank' rel="noopener noreferrer">Get FEC ID Number</a>
        <br />
      <Form />

      
       
    </div>
  );
}

export default App;
