import React from "react";
import type { locationType, location_dataType } from "./types";
import { loadComponents } from "next/dist/server/load-components";

("use strict");

export function getLocationFromName(name: string): any {
  let ret: locationType = {
    name: name,
    data: "test data",
  };
  return ret;
}

function getDatafromUrl(url: string): any {}

function Location(props: { locData: locationType }) {
  return (
    <li className="cityli">
      <h1 className="close-container">
        <button className="close-button">X</button>
      </h1>
      <div className="city">
        <div className="city-grid">
          <h2 className="city-name" data-name='${props.locData.name}'>
            <span>{props.locData.name}</span>
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
  let locElements = props.locations.map(function (loc) {
    return <Location locData={loc} />;
  });

  return (
    <section className="ajax-section">
      <div className="container">
        <ul className="cities">{locElements}</ul>
      </div>
    </section>
  );
}
