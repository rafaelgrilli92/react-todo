var React = require('react');

var TodoAdd = React.createClass({
	onAddTodo: function(e) {
		e.preventDefault();

		var todoText = this.refs.todoText.value;

		if (todoText.length > 0) {
			this.refs.todoText.value = '';
			this.props.onAddTodo(todoText);
		}
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.onAddTodo}>
					<input placeholder="What do you need to do?" type="text" ref="todoText" />
					<button className="button expanded primary">Add Todo</button>
				</form>
			</div>
		)
	}
});

module.exports = TodoAdd;