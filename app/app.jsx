var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configStore').config();

store.subscribe(() => {
	console.log('newState', store.getState());
});

store.dispatch(actions.addTodo('Study more'));
store.dispatch(actions.setSearchText('more'));
store.dispatch(actions.toggleShowCompleted());

// Load Foundation
$(document).foundation();

// App CSS
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<TodoApp />, 
	document.getElementById('app')
);