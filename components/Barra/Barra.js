import "./barra.css"

function Barra(props) {
  const { status, number, mph, } = props;

  return (
    <div id="estado">
      <h4>{status}</h4>
      <div id="divmph">
        <h1>{number}</h1>
        <p id="mph">{mph}</p>
      </div>
      <div className="barra">
        <div id="divBarra" style={{ height: "8px", background:"#E7E7EB" , width: "185px" }}>
          <div 
          style={{ height: "100%", background: "#FFEC65", width: `${number}%` }}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Barra;