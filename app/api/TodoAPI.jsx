var $ = require('jquery');

module.exports = {

  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem("todos", JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];


    try{
      todos = JSON.parse(stringTodos);
      //JSON.parse can fail so thats why i used try catch block
    }catch(e){

    }

    return $.isArray(todos) ? todos : [];
  }
};
