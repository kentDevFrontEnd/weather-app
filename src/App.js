import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import dateBuilder from "./common/dateBuilder";
import Spinner from "./common/Spinner";
const key = "0de65d7184d302406cdfa11f506f07d6";

const App = () => {
  const [dataWeather, setDataWeather] = useState({});
  const [term, setTerm] = useState("New York");
  // const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await Axios.get(
          `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=${key}`
        );
        setDataWeather(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [term]);

  console.log(dataWeather);

  const onSubmitForm = (newTerm) => {
    setTerm(newTerm);
  };

  return (
    <div
      className={
        typeof dataWeather.main != "undefined"
          ? dataWeather.main.temp < 25
            ? "app"
            : "app warm"
          : "app"
      }
    >
      <main>
        <Search onSubmitForm={onSubmitForm} />
        {/* {typeof dataWeather.main != "undefined" ? ( */}
        {Object.keys(dataWeather).length !== 0 ? (
          <>
            <div className="location-box">
              <div className="location">
                {dataWeather.name}, {dataWeather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.floor(dataWeather.main.temp)} °C</div>
              <div className="weather">{dataWeather.weather[0].main}</div>
            </div>
          </>
        ) : (
          <div className="loading">
            <Spinner />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
