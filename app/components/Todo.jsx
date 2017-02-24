var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var moment = require('moment');

//export pure react component for testing but by default we want to export the redux version
//export default(see bottom of code)
export var Todo = React.createClass({
  render:function(){
    var {id,text, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderTime = () =>{
      var message = "Created ";
      var timestamp = createdAt;

      if(completed){
        message = "Completed ";
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a')
    };
    return (
      <div  className={todoClassName} onClick={() => {
        //this.props.onToggle(id);
        dispatch(actions.startToggleTodo(id, !completed));
      }}>
        <div>
          <input type="checkbox" checked={completed}/>
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderTime()}</p>
        </div>
      </div>
    )
  }
});

export default connect()(Todo);
