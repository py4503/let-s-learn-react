import { useState } from 'react'
import './App.css'
import Card from '../src/components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import { useEffect } from 'react'
function App() {
  const [themeMode, setThemeMode] = useState("light")
  const lightTheme=()=>{
    setThemeMode("light")
  }
  const darkTheme=()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode);
  },[themeMode])
  return (
   <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className='flex-wrap justify-center items-center'>
    <ThemeBtn/>
    <Card/>
    </div>
    </ThemeProvider>
   </>
  )
}

export default App
