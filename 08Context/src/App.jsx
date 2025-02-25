import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
      <h2>Let's begin this journey with dns...</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
