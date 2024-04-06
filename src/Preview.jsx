import './preview.css'
import Stats from './Stats.jsx'
import characters from '../character-info.js'

function Preview({selectedCharacter, charIndex}) {
  
    return (
      <div className='preview'>

        <div className='name-and-portrait' >
          <div className="name">
            {selectedCharacter}
          </div>
          <img  className="portrait"src = {`../public/previews/${selectedCharacter}.png`}/>
        </div>

        <Stats charIndex={charIndex} selectedCharacter = {selectedCharacter}></Stats>

        <div className='description'>
          <p>~~~~~~~~~~~~~~~</p>
          {characters[charIndex].description}
          <p>~~~~~~~~~~~~~~~</p>

        </div>


      </div>

    
    )
  }
  
  export default Preview