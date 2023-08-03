import "./BotonesGrados.css";

export default function BotonesGrados(props) {
  const Button_F = () => {
    props.getNewGrados("&units=imperial");
  };
  const Button_c = () => {
    props.getNewGrados("&units=metric");
  };
  return (
    <div id="btns">
      <button id="btnC" onClick={Button_c}>
        °C
      </button>
      <button id="btnF" onClick={Button_F}>
        °F
      </button>
    </div>
  );
}