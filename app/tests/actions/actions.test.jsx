import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
var expect = require('expect');

var actions = require('actions');

var createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: '1231',
        text: 'something',
        completed: false,
        createdAt: 0
      }
    };
    var res = actions.addTodo(action.todo);
    expect(res).toEqual(action);
  });

  it('should create add todo and dipatch ADD_TODO', (done) => {
    //creating an instance of our mockStore
    const store = createMockStore({});
    const todoText = 'Anything';

    store.dispatch(actions.startAddTodo(todoText)).then(() =>{
      //getActions will return an array with all of the actions were fired on our mockstore
      const actions = store.getActions();
      //toInclude is similar to toEqual as long as the given property
      //(even other differnt propeties exist in the actions it doesnt matter) exist the test will pass
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
        });

      expect(actions[0].todo).toInclude({
        text: todoText
      });
      //call done is necessary to finish the test.
      done();
    }).catch(done);//done will wrap test up and it will call done with the error object

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

  it('should generate updateTodo action', () => {
    var action = {
      type: 'UPDATE_TODO',
      id: 1,
      updates: {completed: false}
    };

    var res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Test with firebase todos', () => {
    //will store the refernce to todos, its accesible everywhere inside the describe block
    var testTodoRef;
    //handler inside mocha gets fired before every test case
    beforeEach((done)=>{

    });
    afterEach((done)=>{

    });

    it('should toggle todo and dipatch UPDATE_TODO action', ()=> {
      
    })
  });
});
