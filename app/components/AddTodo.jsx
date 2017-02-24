var React =  require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function(e){
     e.preventDefault();
     var {dispatch} = this.props;
     var todo = this.refs.todo.value;

     if(todo.length > 0){
       this.refs.todo.value="";
       //this.props.onAddTodo(todo);
       dispatch(actions.addTodo(todo));
     }else{
       this.refs.todo.focus();
     }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Add todo item" ref="todo"/>
          <button className="button expanded">Add</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
