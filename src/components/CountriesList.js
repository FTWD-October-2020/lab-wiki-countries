import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
const CountriesList = () => {
  //   const countries = () => {
  return countries.map((country) => {
    return <li><Link to={`/country/${country.flag}`}>{country.name.common}</Link></li>
  });
  //   };
  //   return;
};

export default CountriesList;
