var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jQuery'),
	TestUtils = require('react-addons-test-utils');

var TodoAdd = require('TodoAdd');

describe('TodoAdd Component', () => {
	it('Should exist', () => {
		expect(TodoAdd).toExist();
	});

	it('Should call onAddTodo prop with valid data', () => {
		var todoText = 'Check Mail';
		var spy = expect.createSpy();
		var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoAdd));

		todoAdd.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('Should not call onAddTodo when invalid data', () => {
		var todoText = '';
		var spy = expect.createSpy();
		var todoAdd = TestUtils.renderIntoDocument(<TodoAdd onAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todoAdd));

		todoAdd.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});