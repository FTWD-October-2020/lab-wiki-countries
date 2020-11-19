import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';
const CountriesList = () => {
  //   const countries = () => {
  return countries.map((country) => {
    return <Link to={`/country/${country.flag}`}>{country.name.common}</Link>;
  });
  //   };
  //   return;
};

export default CountriesList;
