import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [value, setValue] = useState ()
  return (
    <div className="App">
      <input 
        value={value}
        type="text" />
        onChange={}
    </div>
  )
}

export default App
