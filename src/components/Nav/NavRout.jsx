import { Routes, Route, BrowserRouter } from "react-router-dom";
import Todo from '../todo-list/todo';
import Dashboard from "../Dashboard";
import Tasks from "../todo-list/filterTasklist";
import Settings from "../settings/Settings";
import Taskdetail from "../todo-list/taskdetail";
// import ViewTasklist from "../todo-list/tasklist";
function NavRout() {
  return (
      
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/tasks' element={<Todo/>}/>
            <Route path='/setting' element={<Settings/>}/>
            <Route path='/tasks/:taskId' element={<Taskdetail/>}/>
            {/* <Route path='/tasks/:taskId/taskview/:task' element={<Taskdetail/>}/> */}
        </Routes>

  )
}

export default NavRout
