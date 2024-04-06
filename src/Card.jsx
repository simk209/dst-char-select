import './card.css'

function Card({name, onSelectCharacter}) {
  
  const handleClick = () =>{
    onSelectCharacter(name)
  }

    return (
      <div onClick = {handleClick}>
        <img className = "card-img" src={`../public/heads/${name}.png`} alt={name} />
      </div>
    )
  }
  
  export default Card