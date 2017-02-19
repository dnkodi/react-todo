var React = require('react');
var ReactDOM = require('react-dom');
//es6 destructuring syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//load foundation
$(document).foundation();

//load app.css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>React Boilerplate3</p>,
  document.getElementById('app')
);
