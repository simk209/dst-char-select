import Selection from './Selection.jsx'
import Preview from './Preview.jsx'
import './app.css';
import { useState } from 'react';



function App() {
  const [selectedCharacter, setSelectedCharacter] = useState("Wilson");
  const [charIndex, setCharIndex] = useState(0)

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleCharIndex = (index) => {
    setCharIndex(index)
  }
  
  return (
    <div className='app-container'>
      <Selection onSelectCharacter={handleSelectCharacter} onSelectIndex = {handleCharIndex}/>
      <Preview selectedCharacter={selectedCharacter} charIndex = {charIndex}/>
    </div>
  )
}

export default App
