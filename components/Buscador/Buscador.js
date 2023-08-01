import "./buscador.css";

function Buscador(props) {
  const { city, onCityChange, onClick } = props;

  const handleCityClick = () => {
    onCityChange(city);
    onClick();
  };

  return (
    <div className="divCity" onClick={handleCityClick}>
      <p className="city">{city}</p>
      <span> &gt; </span>
    </div>
  );
}

export default Buscador;