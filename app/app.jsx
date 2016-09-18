var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');

// Load Foundation
$(document).foundation();

// App CSS
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			{/*<IndexRoute component={Component1} />
			<Route path="pageName" component={Component2} />*/}
		</Route>
	</Router>, 
	document.getElementById('app')
);