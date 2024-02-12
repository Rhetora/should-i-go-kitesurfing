import React from "react";
import type { locationType, location_dataType } from "./types";
import { loadComponents } from "next/dist/server/load-components";

("use strict");

export function getLocationFromName(name: string): any {
  let ret: locationType = {
    name: name,
    data: "test data",
  };
  //"InvalidCity"
  return ret;
}

function getDatafromUrl(url: string): any {
}

function Location(props: { location: locationType }) {
  return (
    <li className="cityli">
      <h1 className="close-container">
        <button className="close-button">X</button>
      </h1>
      <div className="city">
        <div className="city-grid">
          <h2 className="city-name" data-name='${props.locData.name}'>
            <span>{props.location.name}</span>
            <sup>{"GB"}</sup>
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

export function LocationGrid(props: { locations: locationType[] }) {
  let locationMarkup = props.locations.map(function (currLocation) {
    return <Location location={currLocation} />;
  });

  return (
    <section className="ajax-section">
        <ul className="cities">{locationMarkup}</ul>
    </section>
  );
}
