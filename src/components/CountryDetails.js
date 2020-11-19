import React from 'react';
import countries from '../countries.json'


const CountryDetails = (props) => {
    // console.log(props.match.params.flag)
    // console.log(countries)
    let country = countries.find((country) => {
        return country.flag === props.match.params.flag
    })
    console.log(country)
    return (

        <div>
            <h1>{country.name.common}</h1>
            <hr />
            Capital - {country.capital}
            <hr />
            Area - {country.area} km<sup>2</sup>
            <hr />
            Borders - 
        </div>

    )
}

export default CountryDetails;