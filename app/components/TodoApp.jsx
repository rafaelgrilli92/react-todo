var React = require('react');
var uuid = require('node-uuid');

// Components
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{id: uuid(), text: 'Walk the dog'},
				{id: uuid(), text: 'Clean the yard'},
				{id: uuid(), text: 'Wash the car'},
				{id: uuid(), text: 'Watch TV'}
			],
			showCompleted: false,
			searchText: ''
		}
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos, 
				{
					id: uuid(),
					text: text
				}
			]
		});
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
				<TodoAdd onAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;