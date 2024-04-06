import './stats.css'
import characters from '../character-info'
function Stats({selectedCharacter, charIndex}) {
    
    return (
        <div className="stats">

            <div className="stat-icons">
                <div className='health'>
                    <img src="../public/meter/health.png" />
                    <div>
                        {characters[charIndex].health}
                    </div>
                </div>

                <div className='hunger'>
                    <img src="../public/meter/hunger.png" />
                    <div>
                        {characters[charIndex].hunger}
                    </div>
                </div>

                <div className='sanity'>
                    <img src="../public/meter/sanity.png" />
                    <div>
                        {characters[charIndex].sanity}
                    </div>
                </div>
            </div>



        </div>
      
    )
  }
  
  export default Stats