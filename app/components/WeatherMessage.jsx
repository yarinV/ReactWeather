var React = require('react');

var WeatherMessage = ({isLoading, location, temp, errorMessage}) => {
    return (
        <div className="weather-message">
            {isLoading && 
                <h3>Fetching weather...</h3>
            }

            {!!location && !!temp &&
                <h3>It's {temp} celsius in {location} right now</h3>
            }

            {!!errorMessage &&
                <h3 className="error">{errorMessage}</h3>
            }
        </div>
    ) 
}

module.exports = WeatherMessage;