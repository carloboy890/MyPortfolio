import React, { useState, useEffect, useMemo } from "react";
import styles from "./NightMainCardWeather.module.css";
import Sunny from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/SunnyLogo.svg";
import Cloudy from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/CloudyLogo.svg";
import Fog from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/FogLogo.svg";
import Rain from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/RainLogo.svg";
import Snow from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/SnowLogo.svg";
import HeavySnow from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/HeavynowLogo.svg";
import ThunderStorm from "../../assets/ProjectsLogos/OtherProjectsSVG/WeatherLookUpLogos/ThunderstormLogo.svg";
import { getWeatherIcon } from "./WeatherlookUpIcons";
import { useWeatherDays } from "./WeatherDays";
import WeatherDaysMainCard from "./WeatherDaysMainCard";
import { getWeatherMetrics } from "./WeatherHeaderCardData";
import { formatTimeForTimezone } from "./formatTime";
import { getWeatherWallpaper } from "./WeatherWallpapers";
import CurrentTime from "./CurrentTime";

function NightMainCardWeather({
  passCurrentWeather,
  setPassMetrics,
  setWeatherWallpaper,
  setWallpaperSource,
  isNight,
}) {
  const {
    daily_result,
    hourly_Result,
    location,
    weatherText,
    date,
    timezone,
    current_weather,
  } = passCurrentWeather;

  const [isID, setisID] = useState(0);

  const { weathercode, sunrise, sunset } = daily_result;

  const FLLocation = location.slice(0, 1).toUpperCase();
  const RLocation = location.slice(1);
  const updatedLocation = FLLocation + RLocation;

  const iconMap = {
    sunny: Sunny,
    cloudy: Cloudy,
    fog: Fog,
    rain: Rain,
    snow: Snow,
    heavySnow: HeavySnow,
    rainShowers: Rain,
    thunderStorm: ThunderStorm,
  };

  const weatherCodeSliced = weathercode.slice(0, 4);
  const iconsArray = useMemo(() => {
    return weatherCodeSliced.map((code) => {
      const text = getWeatherIcon(code);
      return iconMap[text];
    });
  }, [weatherCodeSliced]);

  const date4Slice = date.slice(0, 4);

  const handleClick = (id) => {
    setisID(id);

    const dayMetrics = getWeatherMetrics(
      current_weather,
      daily_result,
      hourly_Result,
      id,
    );

    setPassMetrics(dayMetrics);
  };

  const weatherTextSliced = weatherText.slice(0, 4);

  const days = useWeatherDays(
    current_weather,
    daily_result,
    weatherTextSliced,
    date4Slice,
    iconsArray,
  );
  console.log(days);

  const formattedTime = formatTimeForTimezone(timezone);

  useEffect(() => {
    if (!timezone || !sunrise || !sunset) return;

    const wallpaper = getWeatherWallpaper(
      weathercode,
      formattedTime,
      sunrise,
      sunset,
      timezone,
      isID,
    );

    setWeatherWallpaper(wallpaper);
    setWallpaperSource("day");
  }, [isID, formattedTime, weathercode, sunrise, sunset]);

  const selectedDay = days.find((day) => day.id === isID);

  return (
    <div className="w-full h-1/2 mb-10 flex justify-center items-center">
      <div
        className={`${styles.card} scale-175
      max-2xl:scale-160
      max-xl:scale-140
      max-md:scale-120
      max-sm:scale-120`}
      >
        <section className={styles.infoSection}>
          <div className={`${styles.backgroundDesign}`}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.leftSide}>
            <div className={styles.weather}>
              <img src={selectedDay?.weatherIcon} alt="" className="h-8 w-8" />
              <div className="text-[0.8rem] font-bold">
                {selectedDay?.weathertext}
              </div>
            </div>
            <div className={styles.temperature}>
              {selectedDay?.temperature} °C
            </div>
            <div className="ml-3 text-[0.8rem]">{selectedDay?.range}°</div>
          </div>
          <div className={styles.rightSide}>
            <div>
              <CurrentTime timezone={timezone} className={styles.hour} />
              <div className={styles.date}>{selectedDay?.date}</div>
            </div>
            <svg
              className="h-6 w-6 absolute top-17 right-7"
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="64px"
              height="64px"
              viewBox="0 0 64 64"
              xmlSpace="preserve"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#ffffff"
                  d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                ></path>
              </g>
            </svg>
            <div className="font-semibold mt-3">{updatedLocation}</div>
          </div>
        </section>
        <div className={`flex w-full font-bold text-[0.8rem] h-11.5`}>
          {date4Slice.map((value, i) => {
            return (
              <WeatherDaysMainCard
                onClick={() => {
                  handleClick(i);
                }}
                id={i}
                key={i}
                iconsArray={iconsArray}
                setPassMetrics={setPassMetrics}
                isNight={isNight}
                props={{
                  id: i,
                  dateSlice: value.slice(0, 3).toUpperCase(),
                  isIcons: days[i].weatherIcon,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NightMainCardWeather;
