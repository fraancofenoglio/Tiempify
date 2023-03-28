import { useEffect, useState } from "react";
import Instructions from "./components/Instructions";
import ShowWeather from "./components/ShowWeather";
import WeatherForm from "./components/WeatherForm";

function App() {
  const [weather, setWeather] = useState();
  const [searching, setSearching] = useState(false);
  const [night, setNight] = useState(false);
  
  useEffect(() => {
    
    const daynight = new Date().getHours()
    if (daynight > 19 || daynight < 6) {
      setNight(true)
    } else {
      setNight(false)
    }
  }, [])
  
  return (
    <div className="App" style={night ? {backgroundColor: "#1B1B3A"}: {backgroundColor: "#6BBAEC"}}>
      <h1 onClick={() => window.location.reload()} className="title">Tempify</h1>

      <WeatherForm setSearching={setSearching} setWeather={setWeather} night={night}/>

      { weather ? <ShowWeather night={night} weather={weather}/> :( searching ? <div className="custom-loader"></div> : <Instructions night={night}/>)}

      <div className="dev">
        <a href="https://github.com/fraancofenoglio" target="_blank" rel="noreferrer"> Hecho por Franco Fenoglio</a>
      </div>

    </div>
  );
}

export default App;
