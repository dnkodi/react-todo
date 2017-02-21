var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  });

  it('should render one Todo component for each todo item', () =>{
    var todos = [{id:1, text:'do something'},{id:2, text:'do this'}];

    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todolist, Todo);

    expect(todosComponents.length).toBe(todos.length);

  });
});