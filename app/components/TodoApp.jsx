var React = require('react');
var uuid = require('node-uuid');

// API
var TodoAPI = require('TodoAPI');

// Components
var TodoList = require('TodoList');
var TodoAdd = require('TodoAdd');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos)
	},
	getInitialState: function() {
		return {
			todos: TodoAPI.getTodos(),
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
					text: text,
					completed: false
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
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if (id === todo.id) {
				todo.completed = !todo.completed;
			}

			return todo;
		});
		
		this.setState({
			todos: updatedTodos
		});
	},
	render: function(){
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		return (
			<div>
				<TodoSearch onSearch={this.handleSearch}/>
				<TodoList todos={filteredTodos} onToggle={this.handleToggle} />
				<TodoAdd onAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;