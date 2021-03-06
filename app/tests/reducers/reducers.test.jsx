var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('seacrhTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    })
  });
  describe('showCompletedReducer', () => {
    it('should change the showCompleted status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () =>{
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: '1234',
          text: 'something',
          completed: false,
          createdAt: 23212345
        }
      };

      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should update todo', () => {

      var todos = [{
          id:1,
          text: 'do something',
          completed: true,
          createdAt: 123,
          completedAt: 125
      }];

      var updates = {
        completed: false,
        completedAt: null
      }

      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates: updates
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(updates.completed);
      expect(res[0].completedAt).toEqual(updates.completedAt);
      expect(res[0].text).toEqual(todos[0].text);
    });

    it('should add existing todos', () => {
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
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  });
});
