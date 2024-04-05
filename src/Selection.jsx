import Card from './Card.jsx'
import characters from '../character-info.js'
import './selection.css'


function Selection() {
  const row1Chars = characters.slice(0, 4);
  const row2Chars = characters.slice(4, 8);
  const row3Chars = characters.slice(8);

  return (
    <div className='rows'>
      <div className="row">
        {row1Chars.map((character) => (
          <Card name={character.name} />
        ))}
      </div>
      <div className="row">
        {row2Chars.map((character) => (
          <Card name={character.name} />
        ))}
      </div>
      <div className="row">
        {row3Chars.map((character) => (
          <Card name={character.name} />
        ))}
      </div>
    </div>
  );

}

export default Selection