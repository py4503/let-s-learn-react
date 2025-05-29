import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo,updateTodo } from '../src/feature/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div>Todo list:</div>
    {todos.map((todo) => (
        <li key={todo.id}>
            {todo.text}
            <button
            onClick={() => dispatch(todo.id)}
            >X</button>
            <button
            onClick={(e) => handleUpdate(e.target.value)}
            >U</button>
        </li>
    ) )}
    </>
  )
}

export default Todos
