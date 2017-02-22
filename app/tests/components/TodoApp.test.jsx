var React = require('react');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist()
  });

  it('should add todos to the todo state in handleAddTodo', () => {
    var todoText = "Test text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos:[]
    });
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
    //expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () =>{
    var todoData = {
      id: 11,
      text: 'test text',
      completed: false,
      createdAt:0,
      completedAt:undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    //check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);

    //call handleToggle with 11
    todoApp.handleToggle(11);


    //verify that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);

    //expect completed at to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');

  });


  //test that when  toggle from true to false, completedAt get removed.
  it('should remove completedAt when toggle from true to false', () => {
    var todoData = {
      id: 11,
      text: 'test text',
      completed: true,
      createdAt:0,
      completedAt:1234
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [todoData]
    });

    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
