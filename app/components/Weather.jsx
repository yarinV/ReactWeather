var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        }
    },
    handleSearch: function(location){
        if(!location){
            this.setState({empty:true})
            return
        }
        this.setState({isLoading:true});
        openWeatherMap.getTemp(location).then(function(temp){
            this.setState({
                location:location,
                temp: temp,
                isLoading:false
            });
        },function(data){
            this.setState({
                errorMessage: data.message,
                isLoading:false
            });
        });        
    },
    render: function(){
        var {isLoading, temp, location, errorMessage, empty} = this.state;
        
        function renderMessage(){
            if(isLoading){
                return <WeatherMessage isLoading={isLoading}/>;
            }else if(temp && location){
                return <WeatherMessage location={location} temp={temp}/>;
            }else if(errorMessage){
                return <WeatherMessage errorMessage={errorMessage}/>;
            }
        }        
        return (
            <div>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;
