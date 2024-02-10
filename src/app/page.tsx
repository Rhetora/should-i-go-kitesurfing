"use client";
import "../../css/page.css";
import React, { useState, useContext } from "react";
import {CheckboxGrid, WeightBox} from "./entities";
import Location from "./location";
import type { locationType } from "./types.ts";

("use strict");

export default function Page() {
  const [kites, setKites] = useState<number[]>([]);
  const sizesAvailable = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17];
  const [weight, setWeight] = useState<number>(0);
  const [locations, setLocations] = useState<locationType[]>([]);

   let locElements = locations.map(function (loc) {
    return (
      <Location
        locData={loc}
      />
    );
  });

  return (
    <body>
      <section className="top-banner">
        <div className="header-grid">
          <h1 className="heading">Should I go Kiting?</h1>
          <form>
            <input
              type="text"
              className="input-city"
              placeholder="Search for a city"
              autoFocus
            />
            <button type="submit">SUBMIT</button>
            <span className="msg"></span>
          </form>
        </div>
        <div className="header-grid">
          <h2 className="kites-heading">Kite Quiver</h2>
          <CheckboxGrid sizesAvailable={sizesAvailable} kites={kites} setKites={setKites} />
          <WeightBox setWeight={setWeight}/>
        </div>
      </section>
      {locElements}
    </body>
  );
}

function getLocationData(url: string): any {}
