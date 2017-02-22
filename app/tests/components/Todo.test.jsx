var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var Todo = require('Todo');
var $ = require('jquery');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist()
  });

  it('should call onToggle with proper id', () =>{
    var todoData= {
      id:199,
      text: 'dummy data',
      completed: false
    };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(199);

  });
});
