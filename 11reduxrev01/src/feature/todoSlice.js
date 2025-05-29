import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"hello world",
    }]
}

// can declare as a function and give reference in reducers
// function sayHello(){
//     console.log("hello");
// }

// state give access to initial state means previous values 
// actions give new values which came

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action) =>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=>todo.id == action.payload? action.payload : todo )
        }
    }
}
)

export const {addTodo,deleteTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer