var React = require('react');

// Components
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{id: 1, text: 'Walk the dog'},
				{id: 2, text: 'Clean the yard'},
				{id: 3, text: 'Wash the car'},
				{id: 4, text: 'Watch TV'}
			],
			showCompleted: false,
			searchText: ''
		}
	},
	handlerAddTodo: function(text) {
		alert('now todo:' + text);
	},
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function(){
		var {todos} = this.state;
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={todos}/>
				<TodoAdd onAddTodo={this.handlerAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;