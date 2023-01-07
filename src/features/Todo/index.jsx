import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Outlet, useLocation} from "react-router";
import ButonTodo from "./component/ButtonTodo";
import TodoList from "./component/TodoList";
import todos from "./component/Data/data.jsx";
import { Link } from "react-router-dom";
import queryString from "query-string";

// Todo.propTypes = {

// };

function Todo(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];
  //URL
  const location = useLocation();
  const history = useNavigate();
  // const match = useRoutMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [fiterStatus, setfiterStatus] = useState(()=>{
    const params = queryString.parse(location.search);
    // window.location.search
    console.log(params)
    return params.status || "all"
  });
  //update state
  useEffect(()=>{
    const params = queryString.parse(location.search);
    // window.location.search
    setfiterStatus(params.status || "all")
  },[location.search])

  const handleTodoClick = (todo, index) => {
    // console.log(todo,index)
    //clone array new
    const newTodoList = [...todoList];
    //togle
    const togleTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    // console.log(newTodoList)
    // console.log(newTodoList[index]);
    // console.log(todo)
    newTodoList[index] = togleTodo;
    //update set
    setTodoList(newTodoList);
  };
  //click button toggle
  const handleButtonAllClick = (index) => {
    // setfiterStatus("all");
    const queryParams = {status: "all"};
    history({
      pathname: "/todos",
      search: queryString.stringify(queryParams),
    })
    // console.log("1");
  };
  const handleButtonComClick = (index) => {
    // setfiterStatus("completed");
    const queryParams = {status: "completed"};
    history({
      pathname: "/todos",
      search: queryString.stringify(queryParams),
    })
    // console.log("2");
  };
  const handleButtonNewClick = (index) => {
    // setfiterStatus("new");
    const queryParams = {status: "new"};
    history({
      pathname: "/todos",
      search: queryString.stringify(queryParams),
    })
    // console.log("3");
  };
  const renderFiter = todoList.filter(
    (todo) => fiterStatus === "all" || fiterStatus === todo.status
  );
  // console.log(renderFiter);

  return (
    <div>
      <h4>Todolist</h4>
      <TodoList todoList1={renderFiter} onTodoClick={handleTodoClick} />
      <ButonTodo buttonTodo="Show All" onButtonFun={handleButtonAllClick} />
      <ButonTodo
        buttonTodo="Show Completed"
        onButtonFun={handleButtonComClick}
      />
      <ButonTodo buttonTodo="Show New" onButtonFun={handleButtonNewClick} />
      <div>
        {todos.map((todo) => (
          <Link
            style={{ padding: "10px", fontSize: "30px" }}
            to={`/todos/${todo.id}`}
            key={todo.id}
          >
            {todo.name}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Todo;
