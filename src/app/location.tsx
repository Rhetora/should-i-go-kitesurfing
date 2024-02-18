import React from "react";
import { fetchWeatherApi } from "openmeteo";
import type { location_type, locationData_type } from "./types";
import { loadComponents } from "next/dist/server/load-components";

const geocodeApiKey = "65cce5719fc2a519750149dspf35283";
const openMeteoUrl = "https://api.open-meteo.com/v1/forecast";

const openMeteoParams = {
  latitude: 0,
  longitude: 0,
  hourly: [
    "temperature_2m",
    "rain",
    "weather_code",
    "wind_speed_10m",
    "wind_direction_10m",
    "wind_gusts_10m",
  ],
  wind_speed_unit: "kn",
  timezone: "GMT",
  forecast_days: 3,
  models: "meteofrance_seamless",
};

("use strict");
export async function getDataFromCoords(
  lat: number,
  long: number
): Promise<locationData_type> {
  let params = openMeteoParams;
  params.latitude = lat;
  params.longitude = long;
  const responses = await fetchWeatherApi(openMeteoUrl, params);

  // Helper function to form time ranges
  const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

  // Process first location. Add a for-loop for multiple locations or weather models
  const response = responses[0];

  // Attributes for timezone and location
  const utcOffsetSeconds = response.utcOffsetSeconds();
  const timezone = response.timezone();
  const timezoneAbbreviation = response.timezoneAbbreviation();
  const latitude = response.latitude();
  const longitude = response.longitude();

  const hourly = response.hourly()!;

  // Note: The order of weather variables in the URL query and the indices below need to match!
  const weatherData = {
    time: range(
      Number(hourly.time()),
      Number(hourly.timeEnd()),
      hourly.interval()
    ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
    temperature: hourly.variables(0)!.valuesArray()!,
    rain: hourly.variables(1)!.valuesArray()!,
    code: hourly.variables(2)!.valuesArray()!,
    windSpeed: hourly.variables(3)!.valuesArray()!,
    windGusts: hourly.variables(5)!.valuesArray()!,
    windDirection: hourly.variables(4)!.valuesArray()!,
  };

  // `weatherData` now contains a simple structure with arrays for datetime and weather data
  // for (let i = 0; i < weatherData.hourly.time.length; i++) {
  //   console.log(
  //     weatherData.hourly.time[i].toISOString(),
  //     weatherData.hourly.temperature2m[i],
  //     weatherData.hourly.rain[i],
  //     weatherData.hourly.weatherCode[i],
  //     weatherData.hourly.windSpeed10m[i],
  //     weatherData.hourly.windGusts10m[i],
  //     weatherData.hourly.windDirection10m[i]
  //   );
  // }
  return weatherData;
}

export async function getCoordsFromName(
  name: string
): Promise<{ lat: number; lon: number; name: string; country: string } | null> {
  let geocodeUrl = `https://geocode.maps.co/search?q=${name}&api_key=${geocodeApiKey}`;
  try {
    const response = await fetch(geocodeUrl);
    const data = await response.json();
    if (data && data.length > 0) {
      const lat = data[0].lat;
      const lon = data[0].lon;
      const name = data[0].display_name.split(",")[0];
      const country = data[0].display_name.split(",").pop();
      return { lat, lon, name, country };
    } else {
      console.log("No data found");
      return null;
    }
  } catch (error) {
    console.error("Can't convert location to coords", error);
    return null;
  }
}

function Location(props: {
  key: number;
  location: location_type;
  locations: location_type[];
  setLocations: (val: location_type[]) => void;
}) {
  const removeLocation = (locationToRemove: location_type) => {
    // Filter out the location to be removed
    const updatedLocations = props.locations.filter(
      (location) =>
        location.name !== locationToRemove.name ||
        location.country !== locationToRemove.country
    );

    // Update the parent component's state with the new list of locations
    props.setLocations(updatedLocations);
  };

  return (
    <li className="cityli">
      <h1 className="close-container">
        <button
          className="close-button"
          onClick={() => removeLocation(props.location)}
        >
          X
        </button>
      </h1>
      <div className="city">
        <div className="city-grid">
          <h2 className="city-name" data-name="${props.locData.name}">
            <span>{props.location.name}</span>
            <sup>{props.location.country}</sup>
          </h2>
          <div className="city-temp">
            {Math.round(12)}
            <sup>&deg;C</sup>
          </div>
          <figure>
            <img className="city-icon" src="test" alt="weatherpic" />
            <figcaption>fig caption</figcaption>
          </figure>
        </div>
        <div className="city-grid">
          <div className="city-wind">
            12<sup>kts</sup>
          </div>
          <div className="city-wind city-gust">
            13<sup>kts</sup>
          </div>
          <div className="city-arrow">&uarr;</div>
        </div>
      </div>
    </li>
  );
}

export function LocationGrid(props: {
  locations: location_type[];
  setLocations: (val: location_type[]) => void;
}) {
  let locationMarkup = props.locations.map(function (currLocation, i) {
    return (
      <Location
        key={i}
        location={currLocation}
        locations={props.locations}
        setLocations={props.setLocations}
      />
    );
  });

  return (
    <section className="ajax-section">
      <ul className="cities">{locationMarkup}</ul>
    </section>
  );
}
