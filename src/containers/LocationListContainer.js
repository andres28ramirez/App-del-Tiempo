import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';
import { getWeatherCities, getCity } from './../reducers';
import * as actions from './../actions';

class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, setSelectedCity, city, cities } = this.props;
        setWeather(cities);
        //mapear forecast de una
        setSelectedCity(city);
    }

    handleSelectionLocation = city =>{
        this.props.setSelectedCity(city);
    }

    render() {
        return (
            <LocationList 
                cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectionLocation} 
            />
        )
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
}

/*const mapDispatchToProps = dispatch => (
    {
      setCity: value => dispatch(setSelectedCity(value)),
      setWeather: cities => dispatch(setWeather(cities)),
    }
);*/

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({ 
    city: getCity(state),
    citiesWeather: getWeatherCities(state),
});
   
export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);