var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
   return (
       <div className="menu-centered">
            <ul className="menu"> 
                <li><IndexLink to="/" activeClassName="is-active">Get weather</IndexLink></li>
                <li><Link to="daily-forecast" activeClassName="is-active">Daily Forecast</Link></li>
            </ul>
        </div>
    ); 
}
module.exports = Nav;