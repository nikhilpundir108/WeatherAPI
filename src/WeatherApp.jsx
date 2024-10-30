import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function weatherApp() {
  let [weatherInfo, setWearherInfo] = useState({
    city: "delhi",
    feelsLike: 28.89,
    humidity: 54,
    temp: 28.05,
    tempMax: 28.05,
    tempMin: 28.05,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWearherInfo(newInfo);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather Info</h1>

      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
