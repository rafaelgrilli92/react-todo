var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI Component', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('Should exist', () => {
		expect(TodoAPI).toExist();
	})

	describe('setTodos', () => {
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

	describe('getTodos', () => {
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

	describe('filterTodos', () => {
		var todos = [
			{ id: 1, text: 'Some Text', completed: true },
			{ id: 2, text: 'Another One Text', completed: false },
			{ id: 3, text: 'The Last Text', completed: true }
		];

		it('Should return all items if show complete is true', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		})

		it('Should sort by completed status', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos[0].completed).toBe(false);
		});

		it('Should filter ToDos by searchText', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, 'One');
			expect(filteredTodos[0].id).toBe(2);
		});

		it('Should return all ToDos if searchText is empty', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			expect(filteredTodos.length).toBe(3);
		});
	});
});