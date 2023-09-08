import { useState } from 'react'
import './App.css'
import Rony from './Posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <h3>React Project</h3>
    <Rony></Rony>
    </>
   
  )
}

export default App
