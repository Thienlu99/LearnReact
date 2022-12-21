import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames';
import "./style.scss";
TodoList.propTypes = {
    todoList1: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todoList1: [],
    onTodoClick: null,
};

function TodoList(props) {
  const { todoList1,onTodoClick } = props;
  //click
  const handleTodoClick = (todo,index) =>{
    if(!onTodoClick )
    return;
    onTodoClick(todo,index)
  }
  return (
    <ul className="todo-list">
      {todoList1.map((todo,index) => (
        <li key={todo.id} 
        className={classnames({ "todo-item" :true, 
        completed : todo.status === "completed" })}
        onClick = {() =>{handleTodoClick(todo,index) }}
        >{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
