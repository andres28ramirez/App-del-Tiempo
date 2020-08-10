import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

class ForecastItem extends Component {

    constructor(props){
        super(props);

        const { weekDay, hour, data} = this.props;
        this.state = {
            weekDay,
            hour,
            data,
        }
    }

    render(){
        const { weekDay, hour, data} = this.state;
        return (
            <div>
                <div><h4>{weekDay} - {hour} hs</h4></div>
                <WeatherData data={data}></WeatherData>
            </div>
        );
    }
}

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherstate: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
};

export default ForecastItem;