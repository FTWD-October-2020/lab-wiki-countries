import React from 'react';


const CountryDetails = (props) => {
    console.log(props)
    return (

        <div>Country Details {props.match.params.flag}</div>

    )
}

export default CountryDetails;