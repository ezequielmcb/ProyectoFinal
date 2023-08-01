import "./card.css"

function Card(props) {
  const { dia, imagen, firstC, secondC, CF, alt  } = props;
  return (
      <div id="card">
        <h1>{dia}</h1>
        <img src={imagen} alt={alt} />
        <div className="tempet">
          <h1>{firstC}<span>{CF}</span></h1>
          <p>{secondC}<span>{CF}</span></p>
        </div>
      </div>
  )
}

export default Card;



