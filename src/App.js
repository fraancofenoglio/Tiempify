import { useState } from "react";
import Instructions from "./components/Instructions";
import ShowWeather from "./components/ShowWeather";
import WeatherForm from "./components/WeatherForm";


function App() {
  const [weather, setWeather] = useState();
  const [searching, setSearching] = useState(false);

  const daynight = new Date().getHours()

 
  return (
    <div className="App" style={daynight > 19 || daynight < 6 ? {backgroundColor: "#1B1B3A"}: {backgroundColor: "#6BBAEC"}}>
      <h1 onClick={() => window.location.reload()} className="title">Tiempify</h1>
      <WeatherForm setSearching={setSearching} setWeather={setWeather}></WeatherForm>
      { weather ? <ShowWeather weather={weather}/> :( searching ? <div class="custom-loader"></div> : <Instructions/>)}


    </div>
  );
}

export default App;
