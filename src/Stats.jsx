import './stats.css'
import characters from '../character-info'
function Stats({selectedCharacter, charIndex}) {
    
    return (
        <div className="stats">

            <div className="stat-icons">
                <div className='health'>
                    <img src="../public/meter/health.png" />
                    <button>
                        {characters[charIndex].health}
                    </button>
                </div>

                <div className='hunger'>
                    <img src="../public/meter/hunger.png" />
                    <button>
                        {characters[charIndex].hunger}
                    </button>
                </div>

                <div className='sanity'>
                    <img src="../public/meter/sanity.png" />
                    <button>
                        {characters[charIndex].sanity}
                    </button>
                </div>
            </div>



        </div>
      
    )
  }
  
  export default Stats