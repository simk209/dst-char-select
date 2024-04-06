import './preview.css'
import Stats from './Stats.jsx'

function Preview({selectedCharacter}) {
  
    return (
      <div className='preview'>

      <div className='name-and-portrait' >
      
      <div className="name">
        {selectedCharacter}
      </div>

      <img  className="portrait"src = {`../public/previews/${selectedCharacter}.png`}/>
      
      </div>

        <Stats className = "stats" selectedCharacter = {selectedCharacter}></Stats>

      </div>
    )
  }
  
  export default Preview