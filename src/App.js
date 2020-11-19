import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar.js'
import CountriesList from './components/CountriesList.js'
import CountryDetails from './components/CountryDetails.js'

function App() {
  return (
    <>
      <Navbar />
      <CountriesList />
      <CountryDetails />

    </>
  );
}

export default App;
