import React from "react";
import { Outlet, useParams } from "react-router";
import { getTodos } from "../Data/data.jsx";

function ListToDo(props) {
  let params = useParams();
  // console.log(params)
  //parse qua không bị lỗi
  let todo = getTodos(parseInt(params.todosid));
  return (
    <div>
      {/* khớp với Route path= ":todosid"  file index*/}
      {/* Todolist #{params.todosid} */}
      <p>Number: {todo.id}</p>
      <h2>Name: {todo.name}</h2>
      <p>Brith: {todo.data}</p>
      {/* <Outlet></Outlet> */}
    </div>
  );
}

export default ListToDo;
