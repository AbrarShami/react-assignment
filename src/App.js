import { useContext } from 'react';
import logo from './logo.svg';
import './style/index.scss';
import Todo from './components/todo-list/todo';
import Nav  from './components/Nav/Nav'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './components/settings/ThemeContext';
import { TodoProvider } from './components/todo-list/todoContext';
// import counter from '../src/components/counter/counter'
function App() {
  // const {theme} = useContext(ThemeContext)
  return (
      <BrowserRouter>
          <ThemeProvider>
            <TodoProvider>
              <div className="App">
                  <Nav/>
              </div>
            </TodoProvider>
      </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
