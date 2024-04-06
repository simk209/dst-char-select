import './card.css'

function Card({name, onSelectCharacter, index, onSelectIndex}) {

  const handleClick = (event) =>{
    const allCards = document.querySelectorAll('.card-img'); // Select all .card-img elements
    allCards.forEach((card) => card.classList.remove('clicked')); // Remove 'clicked' class from all cards
    event.currentTarget.querySelector('.card-img').classList.add('clicked'); // Add 'clicked' class to the clicked card-img
    
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