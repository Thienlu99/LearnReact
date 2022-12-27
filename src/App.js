
// import './App.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Photo from './features/Photo';
import Todo from './features/Todo';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <h2>Header</h2> 
       <Link to="/todos">Todo</Link>
       <br />
       <Link to="/album">Album</Link>

       <Routes>
       {/* <Route path='/' element={<Todo />} exact/> */}
          <Route path='/todos' element={<Todo />} />
          <Route path='/album' element={<Photo />}/>
       </Routes>
       <h2>Footer</h2>
       </BrowserRouter>

    </div>
  );
}

export default App;
