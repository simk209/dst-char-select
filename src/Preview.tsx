import './preview.css'
import Stats from './Stats.tsx'
import characters from '../character-info.ts'

type PreviewProps = {
  selectedCharacter: string
  charIndex: number
}

function Preview({selectedCharacter, charIndex}:PreviewProps) {
  
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