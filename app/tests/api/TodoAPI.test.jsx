var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI Component', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('Should exist', () => {
		expect(TodoAPI).toExist();
	})

	describe('Set ToDos', () => {
		it('Should set valid ToDos Array', () => {
			var todos = [{id: 100, text: 'Test Set ToDo', completed: false}];
			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});

		it('Should not set invalid ToDos Array', () => {
			var badTodos = {a: 'b'};
			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		})
	});

	describe('Get ToDos', () => {
		it('Should return empty array for bad localStorage data', () => {
			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual([]);
		});

		it('Should return an valid todos array with todos', () => {
			var todos = [{id: 100, text: 'Test Set ToDo', completed: false}];
			localStorage.setItem('todos', JSON.stringify(todos));

			var actualTodos = TodoAPI.getTodos();
			expect(actualTodos).toEqual(todos);
		})
	});
});