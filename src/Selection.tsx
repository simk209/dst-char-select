import Card from './Card.tsx'
import characters from '../character-info.ts'
import './selection.css'
import {Character} from '../character-info.ts'

// onSelectCharacter={handleSelectCharacter} onSelectIndex = {handleCharIndex}


type SelectionProps = {
  onSelectCharacter: (character: string) => void
  onSelectIndex: (index:number) => void
}

function Selection({onSelectCharacter, onSelectIndex}:SelectionProps) {
  const row1Chars:Character[] = characters.slice(0, 4);
  const row2Chars:Character[] = characters.slice(4, 8);
  const row3Chars:Character[] = characters.slice(8);

  return (
    <div className='rows'>
      <div className="row">
        {row1Chars.map((character:Character, index:number) => (
          <Card name={character.name} onSelectCharacter={onSelectCharacter} index= {index} onSelectIndex = {onSelectIndex}/>
        ))}
      </div>
      <div className="row">
        {row2Chars.map((character:Character, index:number) => (
          <Card name={character.name} onSelectCharacter={onSelectCharacter} index= {index+4} onSelectIndex = {onSelectIndex} />
        ))}
      </div>
      <div className="row">
        {row3Chars.map((character:Character, index:number) => (
          <Card name={character.name} onSelectCharacter={onSelectCharacter} index= {index+8} onSelectIndex = {onSelectIndex} />
        ))}
      </div>
    </div>
  );

}

export default Selection