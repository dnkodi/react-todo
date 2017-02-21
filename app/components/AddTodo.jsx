var React =  require('react');

var AddTodo = React.createClass({
  handleSubmit: function(e){
     e.preventDefault();
     var todo = this.refs.todo.value;

     if(todo.length > 0){
       this.refs.todo.value="";
       this.props.onAddTodo(todo);
     }
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add todo item" ref="todo"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
