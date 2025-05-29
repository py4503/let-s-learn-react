import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../src/feature/todoSlice'

function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    addTodoHandler = (e) =>{
        e.preventDefault()
        if(input){
            dispatch(addTodo(input));
            setInput('')
        }
        else{
            console.log("Todo is empty....")
        }
    }
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input type="text" 
        placeholder='Enter todo...'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
      </form>
    </>
  )
}

export default AddTodo
