import Selection from './Selection.jsx'
import Preview from './Preview.jsx'
import './app.css';
import { useState } from 'react';



function App() {
  const [selectedCharacter, setSelectedCharacter] = useState("Wilson");

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };
  
  return (
    <div className='app-container'>
      <Selection onSelectCharacter={handleSelectCharacter} />
      <Preview selectedCharacter={selectedCharacter} />
    </div>
  )
}

export default App
