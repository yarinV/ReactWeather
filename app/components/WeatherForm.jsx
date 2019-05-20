var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        this.props.onSearch(location);
    },
    render: function(){
        return (
            <div className="weather-form">
                <form onSubmit={this.onFormSubmit}>
                    <div className="grid-container">
                    <label>Type the name of your city:
                        <input type="text" ref="location" className="location"/>
                    </label>
                    <button type="submit" className="success button">Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;