import Card from './Card.jsx'
import characters from '../character-info.js'
import './selection.css'


function Selection({onSelectCharacter, onSelectIndex}) {
  const row1Chars = characters.slice(0, 4);
  const row2Chars = characters.slice(4, 8);
  const row3Chars = characters.slice(8);

  return (
    <div className='rows'>
      <div className="row">
        {row1Chars.map((character, index) => (
          <Card name={character.name} onSelectCharacter={onSelectCharacter} index= {index} onSelectIndex = {onSelectIndex}/>
        ))}
      </div>
      <div className="row">
        {row2Chars.map((character, index) => (
          <Card name={character.name} onSelectCharacter={onSelectCharacter} index= {index+4} onSelectIndex = {onSelectIndex} />
        ))}
      </div>
      <div className="row">
        {row3Chars.map((character, index) => (
          <Card name={character.name} onSelectCharacter={onSelectCharacter} index= {index+8} onSelectIndex = {onSelectIndex} />
        ))}
      </div>
    </div>
  );

}

export default Selection