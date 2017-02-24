var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate setsearchtext action', () => {
    //make the final action
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };

    //call the action generator with required parameter
    var res = actions.setSearchText(action.searchText);

    //response from your action generator to equal to object created up above.
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Some text'
    };
    var res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should generate add todos action object', () => {
    var todos = [{
      id: 111,
      text: 'anything',
      createdAt: 234,
      completed: false,
      completedAt: undefined
    }];

    var action = {
      type: 'ADD_TODOS',
      todos: todos
    };

    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 1
    }

    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
