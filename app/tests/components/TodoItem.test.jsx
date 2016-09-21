var React = require('react'),
	ReactDOM = require('react-dom'),
	expect = require('expect'),
	$ = require('jQuery'),
	TestUtils = require('react-addons-test-utils');

var TodoItem = require('TodoItem');

describe('TodoItem Component', () => {
	it('Should exist', () => {
		expect(TodoItem).toExist();
	});
});