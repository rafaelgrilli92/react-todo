var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jquery'),
	TestUtils = require('react-addons-test-utils');

var TodoItem = require('TodoItem');

describe('TodoItem Component', () => {
	it('Should exist', () => {
		expect(TodoItem).toExist();
	});

	it('Should call onToggle prop with id on click', () => {
		var todoData = { id: 199, text: 'Write todo.test.jsx test', completed: true };
		
		var spy = expect.createSpy(); 
		var todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoItem));

		TestUtils.Simulate.click($el[0]);

		expect(spy).toHaveBeenCalledWith(199);
	});
});