import './preview.css'
import Stats from './Stats.jsx'

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
      </div>
    )
  }
  
  export default Preview