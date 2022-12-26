import React, { useState } from 'react';
import ButonTodo from './component/ButtonTodo';
import TodoList from './component/TodoList';

// Todo.propTypes = {
    
// };

function Todo(props) {
    const initTodoList = [
        {
            id:1,
            title: "Eat",
            status: "new",
        },
        {
            id:2,
            title: "Sleep",
            status: "completed",
        },
        {
            id:3,
            title: "Code",
            status:"new",
        },
    ]
    const [todoList, setTodoList] = useState(initTodoList);
    const [fiterStatus, setfiterStatus] = useState("all");

    
    const handleTodoClick = (todo,index) =>{
        // console.log(todo,index)
        //clone array new
    const newTodoList = [...todoList];
        //togle 
        const togleTodo = 
            {
                ...newTodoList[index],
            status : newTodoList[index].status === "new" ? "completed":"new",
        }
        // console.log(newTodoList)
        // console.log(newTodoList[index]);
        // console.log(todo)
        newTodoList[index] = togleTodo;
        //update set
        setTodoList( newTodoList);

    }
    //click button toggle
    const handleButtonAllClick = (index) =>{
        setfiterStatus("all")
        console.log("1")
    }
    const handleButtonComClick = (index) =>{
        setfiterStatus("completed")
        console.log("2")

    }
    const handleButtonNewClick = (index) =>{
        setfiterStatus("new")
        console.log("3")

    }
    const renderFiter = todoList.filter( todo=>
        fiterStatus ==="all" || fiterStatus === todo.status)
    console.log(renderFiter)

    return (
        <div>
            <h4>Todolist</h4>
            <TodoList  todoList1={renderFiter} onTodoClick = {handleTodoClick}/>
            <ButonTodo buttonTodo="Show All" onButtonFun ={handleButtonAllClick}/>
            <ButonTodo buttonTodo="Show Completed" onButtonFun ={handleButtonComClick}/>
            <ButonTodo buttonTodo="Show New" onButtonFun ={handleButtonNewClick}/>
            
        </div>
    );
}

export default Todo;