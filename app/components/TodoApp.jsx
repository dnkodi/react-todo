var React = require('react');
var uuid = require('node-uuid');
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
var moment = require('moment');


var TodoApp = React.createClass({

  render: function(){
    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 large-6 medium-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>

        </div>
      </div>
    );
  }
});

module.exports = TodoApp;
