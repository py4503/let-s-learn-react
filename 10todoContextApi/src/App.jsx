import { useEffect, useState } from 'react'
import './App.css'
import {TodoProvider} from './context'
import { TodoForm, TodoItem } from './components'

function App() {
      // starting of basic context
      const [todos,setTodos] = useState([])
      
      const addTodo = (todo) => {
        setTodos((prev)=>[{id:Date.now(),...todo},...prev])
      }
      
      const updatedTodo = (id,todo) => {
        setTodos((prev) => prev.map((prevTodo)=>prevTodo.id===id? todo : prevTodo))
      }
      const deleteTodo = (id) => {
        setTodos((pVal) => pVal.filter((id_c) => id_c.id !== id))
      }
      const toggleComplete = (id) => {
        setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id? {...prevTodo,completed:!prevTodo.completed} : prevTodo))
      }
      // Ending of basic context

      // starting of local storage 
      useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todos"))

        if(todos && todos.length>0){
          setTodos(todos)
        }
      },[])

      useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
      },[todos])

  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] h-screen ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo)=>{ 
              return <div key={todo.id} className='w-full'><TodoItem todo={todo}/></div>
              // performance will degrade if key not used
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
