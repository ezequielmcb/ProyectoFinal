import "./estado.css"

function Estado(props) {
  const { status, number, mph, wsw, } = props;

  return (
    <div id="estado">
      <h4>{status}</h4>
      <div id="divmph">
        <h1>{number}</h1>
        <p id="mph">{mph}</p>
      </div>
      <div id="divwsw">
        <i class="fa-solid fa-paper-plane"></i>
        <p>{wsw}</p>
      </div>
    </div>
  )
}

export default Estado;