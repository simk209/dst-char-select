import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <Selection></Selection>
      <CharacterPreview></CharacterPreview>

    </div>
  )
}

export default App
