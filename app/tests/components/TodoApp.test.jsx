var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jQuery'),
	TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp Component', () => {
	it('Should exist', () => {
		expect(TodoApp).toExist();
	});

	it('Should add ToDo to the ToDos state on handlAddTodo', () => {
		var todoText = 'Test Text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos:[]});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});

	it('Should toggle completed value when handleToggle called', () => {
		var todoData = { id: 11, text: 'Testing', completed: false };
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});
		todoApp.handleToggle(11);

		expect(todoApp.state.todos[0].completed).toBe(true);
	});
});