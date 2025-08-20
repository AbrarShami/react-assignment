import React, { createContext, useState } from 'react'
export const TodoContext = createContext();
export const TodoProvider = ({children}) => {
const [todolist, setTodolist] = useState([])
  return (
    <TodoContext.Provider value={{todolist, setTodolist}}>
        {children}
    </TodoContext.Provider>
  )
}
