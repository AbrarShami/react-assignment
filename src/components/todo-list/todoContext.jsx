import React, { createContext, useState, useEffect } from 'react'
export const TodoContext = createContext();
export const TodoProvider = ({children}) => {
  const [todolist, setTodolist] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todolist));
  }, [todolist]);
  return (
    <TodoContext.Provider value={{todolist, setTodolist}}>
        {children}
    </TodoContext.Provider>
  )
}
