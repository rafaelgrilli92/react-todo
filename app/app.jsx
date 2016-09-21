var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var TodoApp = require('TodoApp');

// Load Foundation
$(document).foundation();

// App CSS
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
	<TodoApp />, 
	document.getElementById('app')
);