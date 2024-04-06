import './preview.css'
function Preview({selectedCharacter}) {
  
    return (
      <div className='preview'>
        <div className="name">
          {selectedCharacter}
        </div>
        <div  >
        <img src = {`../public/previews/${selectedCharacter}.png`}/>
        </div>
      </div>
    )
  }
  
  export default Preview