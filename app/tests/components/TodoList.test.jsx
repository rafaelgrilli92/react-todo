var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jQuery'),
	TestUtils = require('react-addons-test-utils');

var TodoList = require('TodoList');
var TodoItem = require('TodoItem');

describe('TodoList Component', () => {
	it('Should exist', () => {
		expect(TodoList).toExist();
	});

	it('Should render one TodoComponent for each TodoItem', () => {
		var todos = [{id: 1, text: 'Do something'}, {id: 2, text: 'Check mail'}];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);
		
		expect(todosComponents.length).toBe(todos.length);

	})
});