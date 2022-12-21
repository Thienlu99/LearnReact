import React, { useState } from 'react';
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
        newTodoList[index] = togleTodo;
        //update set
        setTodoList( newTodoList);

    }
    return (
        <div>
            <h4>Todolist</h4>
            <TodoList  todoList1={todoList} onTodoClick = {handleTodoClick}/>
        </div>
    );
}

export default Todo;