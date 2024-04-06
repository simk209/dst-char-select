import './card.css'

function Card({name, onSelectCharacter, index, onSelectIndex}) {
  
  const handleClick = () =>{
    onSelectCharacter(name);
    onSelectIndex(index);
  }

    return (
      <div onClick = {handleClick}>
        <img className = "card-img" src={`../public/heads/${name}.png`} alt={name} />
      </div>
    )
  }
  
  export default Card