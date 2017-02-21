var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should submit text to parent component', () => {
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);

    var $el = $(ReactDOM.findDOMNode(addtodo));
    addtodo.refs.todo.value = "test";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith("test");
  });

  it('should not submit text to parent component with invalid data', () => {
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);

    var $el = $(ReactDOM.findDOMNode(addtodo));
    addtodo.refs.todo.value = "";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
