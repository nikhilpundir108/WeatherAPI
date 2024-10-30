import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function searchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "e4ed7321f8ac92ec212b0145806002b2";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let JsonResponse = await response.json();
      console.log(JsonResponse);

      let result = {
        City: city,
        temp: JsonResponse.main.temp,
        tempMin: JsonResponse.main.temp_min,
        tempMax: JsonResponse.main.temp_max,
        humidity: JsonResponse.main.humidity,
        feelsLike: JsonResponse.main.feels_like,
        weather: JsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      {/* <h3>Search for the weather</h3> */}
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="Submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>cann't found</p>}
      </form>
    </div>
  );
}
