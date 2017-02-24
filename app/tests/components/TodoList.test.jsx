var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {configure} from 'configureStore'

// var TodoList = require('TodoList');
import ConnectedTodoList, {TodoList} from 'TodoList'
import ConnectedTodo, {Todo} from 'Todo'


describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  });

  it('should render one Todo component for each todo item', () =>{
    var todos = [
      {
        id:1,
        text:'do something',
        createdAt: 125,
        completed: false,
        completedAt: undefined
      },
      {
        id:2,
        text:'do this',
        createdAt: 125,
        completed: false,
        completedAt: undefined
      }
    ];

    var store = configure({
      todos: todos
    });

    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    )
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];//access first eleent of the array since we know we only create one instance of the component
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);

  });

  it('should render empty message if no todos', () =>{
    var todos = [];

    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todolist));

    expect($el.find('.container__message').length).toBe(1);

  });
});
