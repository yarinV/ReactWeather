var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
     return (
        <div className="grid-x">
            <div className="cell"><Nav/></div>
            <div className="cell small-6 align-center mt2">{props.children}</div>
        </div>
    );
}
module.exports = Main;