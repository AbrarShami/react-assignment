import { Routes, Route, BrowserRouter } from "react-router-dom";
import Todo from '../todo-list/todo';
import Dashboard from "../Dashboard";
import Settings from "../settings/Settings";
import Tasklist from "../todo-list/tasklist";
import Taskdetail from "../todo-list/taskdetail";
import ViewTasklist from "../todo-list/tasklist";
function NavRout() {
  return (
      
        <Routes>
            <Route path='/' element={<Todo/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/taskList' element={<ViewTasklist/>}/>
            <Route path='/setting' element={<Settings/>}/>
            <Route path='/tasks/:taskId' element={<Tasklist/>}/>
            <Route path='/tasks/:taskId/taskview/:task' element={<Taskdetail/>}/>
        </Routes>

  )
}

export default NavRout
