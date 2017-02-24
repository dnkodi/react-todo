//action gerators like below returns object and its not very useful as it doesnt give us any room to do
//anything async.
//with thunk we can have action generators that returns functions
// export var setSearchText = (searchText) => {
//   return {
//     type: 'SET_SEARCH_TEXT',
//     searchText: searchText
//   }
// };
//actions are WHAT to do NOT HOW to do
import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: searchText
  }
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo: todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null //to remove from firebase otherwise undefined
    };

    var todoRef = firebaseRef.child('todos').push(todo);

    //need to return it for testing purposes otherwise no need to return
    return todoRef.then(() =>{
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  }
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos: todos
  }
};

export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id: id,
    updates: updates
  }
};

//async action that returns a function for update
export var startToggleTodo = (id, completed) =>{
  //we install thunk to return funtions instead of objects.and this lets us do async actions
  //then dispatch our sync ones
  return (dispatch, getState) => {
    //using es6 template strings we can use this `todos/${id}`//
    var todoRef = firebaseRef.child('todos/' +id);

    var updates = {
      completed: completed,
      //using null to remove from firbase if completed false
      completedAt: completed ? moment().unix() : null
    };

    todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  }
}
