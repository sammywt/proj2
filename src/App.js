import './App.css';
import {Route, Link, Routes, Navigate } from 'react-router-dom';
import {useState} from 'react';
import GetData from './components/GetData';

function App() {


  return (
    <div className="App">
      <GetData />
    </div>
  );
}

export default App;
