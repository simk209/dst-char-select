import './card.css'

function Card({name, onSelectCharacter}) {
  
  const handleClick = () =>{
    onSelectCharacter(name)
  }

    return (
      <div onClick = {handleClick}>
        <img src={`../public/heads/${name}.png`} alt={name} />
      </div>
    )
  }
  
  export default Card