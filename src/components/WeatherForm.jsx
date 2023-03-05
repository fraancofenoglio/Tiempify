import { useState } from "react";
import axios from "axios";

const WeatherForm = ({setWeather, setSearching}) => {

    const Key = process.env.REACT_APP_API;

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
  
    const handleSubmit = async (e, city, country) => {
  
      e.preventDefault()
  
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Key}&lang=es&units=metric`;
  
      try {
        setSearching(true)
        const response = await axios.get(url);
        setWeather(response.data);
        setMessage("");
        
      } catch (error) {
        if (error.response.status === 404) {
          setMessage("Ciudad no encontrada verifique si está escrita correctamente");
          setWeather("");
        }

        setTimeout(() => {
          setMessage("");
        }, 5000);
        
      } finally {
        setSearching(false);
        setCity("");
        setCountry("");
      }
    }

  return (
      <>
          <form className="weather-form" onSubmit={(e) => handleSubmit(e, city, country)}>

            <input autoFocus className="city-input" required type="text" min="1" placeholder="Ciudad" value={city} onChange={(e) => setCity(e.target.value)}/>

            <select value={country}className="country-input" required onChange={(e) => setCountry(e.target.value)}>

                <option disabled value="">Seleccione un país</option>
                <option value="AR">Argentina</option>
                <option value="BR">Brasil</option>
                <option value="UR">Uruguay</option>
                <option value="PY">Paraguay</option>
                <option value="CL">Chile</option>
                <option value="BO">Bolivia</option>
                <option value="CO">Colombia</option>
                <option value="MX">México</option>
                <option value="PE">Perú</option>
                <option value="ES">España</option>
            </select>

            <button className="search-button" type="submit">Buscar</button>
          </form>
          {message !== "" ? <h2 className="error-message">{message}</h2> : <></>}
      </>
  )
}

export default WeatherForm