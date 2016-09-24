var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jquery'),
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
	});

	it('Should render empty message if no todos', () => {
		var todos = [];
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container__message').length).toBe(1);

	})
});