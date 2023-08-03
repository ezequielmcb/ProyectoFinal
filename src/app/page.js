"use client";

import { useEffect, useState } from "react";
import Card from "../../components/Card.js/Card";
import Estado from "../../components/Estado/Estado";
import Estadotwo from "../../components/Estadotwo/Estadotwo";
import Barra from "../../components/Barra/Barra";
import Buscador from "../../components/Buscador/Buscador";
import BotonesGrados from "../../components/BotonesGrados/BotonesGrados";
import Fondo from "../../components/Fondo/Fondo";


export default function Home() {
  const [nav, setNav] = useState(false);
  const [grados, setGrados] = useState("&units=metric")
  const [city, setCity] = useState("puerto rico")
  const [searchText, setSearchText] = useState("");
  const [today, setToday] = useState({
    temp: 0,
    city: "",
    weather: 0,
    visibility: 0,
    wind: 0,
    main: "",
  });
  const weatherIcons = {
    Rain: "/nuvelluvia.png",
    Mist: "/nuvenieve.png",
    Clouds: "/LightCloud.png",
    Clear: "/sol.png",
    Cloudy: "nuve.png",
    Drizzle: "/nuvelluvi.png",
    Snow: "/nieve.png"
  };

  const getData = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ffd8bf936c938aa697354f61cf32ee74${grados}`);
    // console.log(res)
    if (res.ok === true) {
      const data = await res.json();
      // console.log(data);

      const weatherIcon = weatherIcons[data.weather[0].main];

      const object = {
        temp: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        visibility: data.visibility,
        wind: data.wind.speed,
        main: data.weather[0].main,
        date: new Date().toLocaleString('en', { day: 'numeric', month: 'short' }),
        weatherIcon: weatherIcon,
      }

      setToday(object);
    }
  }

  const [day, setDay] = useState({
    tempMax1: 0,
    tempMin1: 0,
    tempMax10: 0,
    tempMin10: 0,
    tempMax17: 0,
    tempMin17: 0,
    tempMax26: 0,
    tempMin26: 0,
    tempMax36: 0,
    tempMin36: 0,
    miniIcon1: "",
    miniIcon10: "",
    miniIcon17: "",
    miniIcon26: "",
    miniIcon36: "",
  });

  const getDay = async () => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ffd8bf936c938aa697354f61cf32ee74${grados}`);
    // console.log(res)

    if (res.ok === true) {
      const data = await res.json();
      console.log(data);
      // console.log(data.list[0].weather[0].main);

      const miniIcon1 = weatherIcons[data.list[1].weather[0].main];
      const miniIcon10 = weatherIcons[data.list[10].weather[0].main];
      const miniIcon17 = weatherIcons[data.list[17].weather[0].main];
      const miniIcon26 = weatherIcons[data.list[26].weather[0].main];
      const miniIcon36 = weatherIcons[data.list[36].weather[0].main];

      const object = {
        tempMax1: data.list[1].main.temp_max,
        tempMin1: data.list[1].main.temp_min,
        tempMax10: data.list[10].main.temp_max,
        tempMin10: data.list[10].main.temp_min,
        tempMax17: data.list[17].main.temp_max,
        tempMin17: data.list[17].main.temp_min,
        tempMax26: data.list[26].main.temp_max,
        tempMin26: data.list[26].main.temp_min,
        tempMax36: data.list[36].main.temp_max,
        tempMin36: data.list[36].main.temp_min,
        miniIcon1: miniIcon1,
        miniIcon10: miniIcon10,
        miniIcon17: miniIcon17,
        miniIcon26: miniIcon26,
        miniIcon36: miniIcon36,

      }
      setDay(object);
    }
  }

  useEffect(() => {
    getData();
    getDay();
  }, [city])
  // console.log(today)

  function handleNav() {
    setNav(!nav)
  }

  function handleSearchTextChange(event) {
    setSearchText(event.target.value);
  }

  function handleSearch() {
    handleCityChange(searchText);
    setNav(false);
  }

  function handleCityChange(newCity) {
    const targetCity = newCity || searchText;
    setCity(targetCity);
  }

  function handleGradosChange(newGrados) {
    setGrados(newGrados);
  }

  let GRADO = grados == "&units=imperial" ? "ºF" : "ºC";

  function getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ffd8bf936c938aa697354f61cf32ee74${grados}`)
            .then((response) => response.json())
            .then((data) => {
              const cityName = data.name;
              setCity(cityName);
            })
            .catch((error) => {
              console.error('Error fetching weather data:', error);
            });
        },

      );
    }
  }

  return (
    <div className="contenedorAll">
      <section className="sectionInicial">
        <div className="busqueda">
          <input
            className="busca"
            onClick={handleNav} type="text"
            placeholder="Seach for places"
          />
          <button className="local" onClick={getGeoLocation} >
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
          {nav === true ? (
            <section className="sectionNav">
              <div className="divbtnX">
                <p onClick={handleNav} className="btnX">X</p>
              </div>
              <div className="divbuscar">
                <div>
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input type="text" placeholder="search location" value={searchText} onChange={handleSearchTextChange}
                  />
                </div>
                <button className="btnsearch" onClick={handleSearch}>Search</button>
              </div>
              <Buscador city="London" onCityChange={handleCityChange} onClick={handleNav} />
              <Buscador city="Barcelona" onCityChange={handleCityChange} onClick={handleNav} />
              <Buscador city="Long Beach" onCityChange={handleCityChange} onClick={handleNav} />
            </section>
          ) : (
            ""
          )}
        </div>
        {nav === false ?(
          <Fondo fon={today.weatherIcon}/>
        ):(
          ""
        )}
        <div className="gradosC">
          <div className="temperatura">
            <h1>{today.temp.toFixed(0)}</h1>
            <p>{GRADO}</p>
          </div>
        </div>
        <div className="fecha">
          <p className="shower">{today.main}</p>
          <div className="p">
            <p>Today</p>
            <p>•</p>
            <p>Fri. {today.date}</p>
          </div>
          <div className="divLugar">
            <i className="fa-solid fa-location-dot"></i>
            <p>{today.city}</p>
          </div>
        </div>
      </section>
      <div className="contenedorCardsEstados">
        <section className="sectionSegunda">
          <BotonesGrados getNewGrados={handleGradosChange} />
          <section id="cards">
            <Card dia="Mañana" imagen={day.miniIcon1} firstC={day.tempMax1.toFixed(0)} secondC={day.tempMin1.toFixed(0)} CF={GRADO} />
            <Card dia="Martes" imagen={day.miniIcon10} firstC={day.tempMax10.toFixed(0)} secondC={day.tempMin10.toFixed(0)} CF={GRADO} />
            <Card dia="Miercoles" imagen={day.miniIcon17} firstC={day.tempMax17.toFixed(0)} secondC={day.tempMin17.toFixed(0)} CF={GRADO} />
            <Card dia="Jueves" imagen={day.miniIcon26} firstC={day.tempMax26.toFixed(0)} secondC={day.tempMin26.toFixed(0)} CF={GRADO} />
            <Card dia="Viernes" imagen={day.miniIcon36} firstC={day.tempMax36.toFixed(0)} secondC={day.tempMin36.toFixed(0)} CF={GRADO} />
          </section>
          <div id="title">
            <h1 id="today">Today’s Hightlights </h1>
          </div>
          <section id="estadoDirect">
            <Estado status="Wind status" number={today.wind} mph="mph" wsw="WSW" />
            <Barra status="Humidity" number={today.humidity} mph="%" />
            <Estadotwo statustwo="Visibility" numbertwo={today.visibility} mphtwo="miles" />
            <Estadotwo statustwo="Air Pressure" numbertwo={today.pressure} mphtwo="mb" />
          </section>
            <div id="lastP">
              <p>created by <b><u>username</u></b> - devChallenges.io</p>
            </div>
        </section>
      </div>
    </div>
  )
}
