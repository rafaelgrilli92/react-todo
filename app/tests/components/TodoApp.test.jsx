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
		expect(todoApp.state.todos[0].createdAt).toBeA('number');
	});

	it('Should toggle completed value when handleToggle called', () => {
		var todoData = { 
			id: 11, 
			text: 'Testing', 
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('Should toggle todo from completed to incompleted', () => {
		var todoData = { 
			id: 11, 
			text: 'Testing', 
			completed: true,
			createdAt: 0,
			completedAt: 123
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toNotExist();
	});
});