import { useState } from "react"
import Additional from "./Additional";

const ShowWeather = ({weather}) => {

  const [showMore, setShowmore] = useState(false);

  const {weather: [{icon, description}], name, main} = weather
  return (
    <div className="display-weather">
      <section className="main-weather">
        <h2>Tiempo para
           <span> {name}</span>
        </h2>
        <h3>{description.toUpperCase()}</h3>
        <div className="temperature-icon">
          <h2>{Math.round(main.temp)}°</h2>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
      </section>

      <button onClick={() => setShowmore(!showMore)} className="show-more">
       <p>{ !showMore ?  "Mostrar más" : "Mostrar menos"}</p>
        <img style={showMore ? {rotate: "180deg"} : {rotate: "0deg"}} src="./assets/chevron-down-regular-60.png" alt="arrow" />
      </button>

      {showMore ? <Additional weather={weather}/> : <></>}

    </div>
  )
}

export default ShowWeather