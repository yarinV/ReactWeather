var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
   return (
       <div className="menu-centered">
            <ul className="menu"> 
                <li><IndexLink to="/" activeClassName="is-active">Get Weather</IndexLink></li>
                <li><Link to="about" activeClassName="is-active">About</Link></li>
                <li><Link to="examples" activeClassName="is-active">Examples</Link></li>
            </ul>
        </div>
    ); 
}
module.exports = Nav;