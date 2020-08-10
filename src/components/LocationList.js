import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';


const LocationList = ({ cities, onSelectedLocation }) =>{

    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    }

    const strToComponents = cities => {
        return cities.map( (city) => 
            (
                <WeatherLocation 
                    city={city.name} 
                    key={city.key}
                    data={city.data}
                    onWeatherLocationClick = {() => handleWeatherLocationClick(city.name)}
                />
            )
        );
    }

    return (
        <div className="locationList" >
            {strToComponents(cities)}
        </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
};

export default LocationList;