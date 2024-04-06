import './stats.css'
import characters from '../character-info'
function Stats({selectedCharacter}) {
    // const health = characters.filter(obj=>obj.name = {selectedCharacter})[0].health
    
    return (
        <div className="stats">

            <div className="stat-icons">
                <div className='health'>
                <img src="../public/meter/health.png" />
                <div>
                    
                </div>
                </div>

                <div className='hunger'>
                <img src="../public/meter/hunger.png" />
                </div>

                <div className='sanity'>
                <img src="../public/meter/sanity.png" />
                </div>
            </div>



        </div>
      
    )
  }
  
  export default Stats