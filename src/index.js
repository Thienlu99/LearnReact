import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Todo from "./features/Todo";
import Photo from "./features/Photo";
import ListToDo from "./features/Todo/page/ListToDo/ListToDo";
import { Provider } from "react-redux";
import store from "./Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <h2>Header</h2>
      <Link to="/todos">Todo</Link>
      <br />
      <Link to="/album">Album</Link>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/todos" element={<Todo />}>
          {/* <Route path=":todosid" element={<ListToDo />}
            /> */}
          <Route index element={<div>Mời bạn chọn TodoList</div>}></Route>
          <Route path="/todos/:todosid" element={<ListToDo />} />
        </Route>
        {/* <Route path="/todos/:todosid" element={<ListToDo />} /> */}
        <Route path="/album" element={<Photo />} />
        <Route
          path="*"
          element={<div style={{ fontSize: "100px" }}>Not Found!!!!</div>}
        />
      </Routes>
      <h2>Footer</h2>
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
