import { useState } from "react"
import Additional from "./Additional";

const ShowWeather = ({weather, night}) => {

  const [showMore, setShowmore] = useState(false);
  const {weather: [{icon, description}], name, main} = weather

  return (
    <div className="display-weather">
      <section className="main-weather">
        <h2 style={night ? {textShadow: "none"} : {textShadow: "1px 1px 3px #333333"}}>Tiempo para
           <span> {name}</span>
        </h2>
        <h3 style={night ? {textShadow: "none"} : {textShadow: "1px 1px 3px #333333"}}>{description.toUpperCase()}</h3>
        <div className="temperature-icon">
          <h2 style={night ? {textShadow: "none"} : {textShadow: "1px 1px 3px #333333"}}>{Math.round(main.temp)}°</h2>
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
        </div>
      </section>

      <button onClick={() => {
        setShowmore(!showMore)

        setTimeout(() => {
          
          window.scroll({
            top: 1500,
            left: 0,
            behavior: 'smooth'
          });
        }, 100);
        
      }} className="show-more">
       <p style={night ? {textShadow: "none"} : {textShadow: "1px 1px 3px #333333"}}>{ !showMore ?  "Mostrar más" : "Mostrar menos"}</p>
        <img style={showMore ? {rotate: "180deg"} : {rotate: "0deg"}} src="./assets/chevron-down-regular-60.png" alt="arrow" />
      </button>

      {showMore ? <Additional weather={weather}/> : <></>}

    </div>
  )
}

export default ShowWeather