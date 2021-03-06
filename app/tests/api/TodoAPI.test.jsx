var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

    beforeEach( ()=> {
      localStorage.removeItem('todos');
    });

    it('should set valid todos array', () => {
      var todos = [{
        id:23,
        text: 'sample text',
        completed: false
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);

    });

    it('should not set invalid todos array', () => {
      var badTodos = {a : 'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);


    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return todo if valid array in localStorage', () => {
      var todos = [{
        id:23,
        text: 'sample text',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });

describe('filterTodos', () => {
  var todos = [{
    id:1,
    text: 'some text',
    completed: true
  },{
    id:2,
    text: 'Other text',
    completed: false
  },{
    id:3,
    text: 'Some text here',
    completed: true
  }];
  it('should return all items if showCompleted is true', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);
  });

  it('should return incomplete items if showCompleted is false', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, false, '');
    expect(filteredTodos.length).toBe(1);
  });

  it('should return non-compelted items first', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos[0].completed).toBe(false);
  });

  it('should return todos by searchText', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
    expect(filteredTodos.length).toBe(2);
  });

  it('should return all todos if searchText is empty', () => {
    var filteredTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filteredTodos.length).toBe(3);
  });

});

});
