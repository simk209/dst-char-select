import Selection from './Selection.tsx'
import Preview from './Preview.tsx'
import './app.css';
import { useState } from 'react';



function App() {
  const [selectedCharacter, setSelectedCharacter] = useState<string>("Wilson");
  const [charIndex, setCharIndex] = useState<number>(0)

  const handleSelectCharacter = (character:any):void => {
    setSelectedCharacter(character);
  };

  const handleCharIndex = (index:number):void => {
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
