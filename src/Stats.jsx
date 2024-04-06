import './stats.css'
function Stats({selectedCharacter}) {
  
    return (
        <div className="stats-container">
            <div className="stats">
                <img src="../public/meter/health.png" />
                <img src="../public/meter/hunger.png" />
                <img src="../public/meter/sanity.png" />
            </div>
        </div>
      
    )
  }
  
  export default Stats