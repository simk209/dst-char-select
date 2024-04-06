function Card({name}) {
  
    return (
      <div>
        <img src={`../public/heads/${name}.png`} alt={name} />
      </div>
    )
  }
  
  export default Card