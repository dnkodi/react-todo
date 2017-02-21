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
  });
});
