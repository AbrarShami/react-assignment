import { useContext } from 'react';
import logo from './logo.svg';
import './style/index.scss';
import Todo from './components/todo-list/todo';
import Nav  from './components/Nav/Nav'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './components/settings/ThemeContext';
import { ThemeContext } from './components/settings/ThemeContext';
// import counter from '../src/components/counter/counter'
function App() {
  // const {theme} = useContext(ThemeContext)
  return (
      <BrowserRouter>
          <ThemeProvider>
            <div className="App">

                <Nav/>
                {/* {theme} */}
              {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header> */}
            </div>
      </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
