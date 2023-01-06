let todos = [
  {
    id: 1,
    name: "Homework",
    data: "12/12/1994",
  },
  {
    id: 2,
    name: "Action",
    data: "05/12/2000",
  },
  {
    id: 3,
    name: "Tiktok",
    data: "06/12/1998",
  },
];
//tìm param trùng khớp lấy dữ liệu kiểm tra bên ListTodo.jsx
export function getTodos(id) {
  return todos.find((todo) => todo.id === id);
}
export default todos;
