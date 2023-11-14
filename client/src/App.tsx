import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("")
  useEffect(() => {
    fetch("http://localhost:4000/").then(
      res => res.text()
    ).then(
      text => setText(text)
    )
  }, [])
  

  return (
    <h1>{text}</h1>
  )
}

export default App
