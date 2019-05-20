var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var DailyForecast = require('DailyForecast');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!MainStyle');
require('style!css!NavStyle');
require('style!css!WeatherFormStyle');
require('style!css!WeatherMessageStyle');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="daily-forecast" component={DailyForecast}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);

