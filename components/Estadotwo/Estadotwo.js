import "./estadotwo.css"

function Estadotwo(props) {

  const { statustwo, numbertwo, mphtwo, } = props;

  return (
    <div id="estados">
      <h4>{statustwo}</h4>
      <div id="divmphtwo">
        <h1>{numbertwo}</h1>
        <p id="mphtwo">{mphtwo}</p>
      </div>
    </div>
  )
}

export default Estadotwo;