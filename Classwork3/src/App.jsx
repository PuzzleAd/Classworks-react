import React from 'react'
import Todos from './Todos/Todos'

function App() {
  const todos = [
    { id: 1, text: 'Learn React', completed: true },
    { id: 2, text: 'Build a React app', completed: false },
    { id: 3, text: 'Explore advanced React topics', completed: false },
  ];

  return (
    <>
      <Todos todos={todos}/>
    </>
  )
}

export default App
