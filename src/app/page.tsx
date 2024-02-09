"use client";

import Image from "next/image";
import "../../css/page.css";
import React, { useState, useContext } from "react";
import CheckboxGrid from "./entities";
import LocationGrid from "./location";
import type { kitesKeyPairType, locationType } from "./types.ts";

("use strict");

export default function Page() {
  const [kites, setKites] = useState();
  const [weight, setWeight] = useState<number>(0);
  const [locations, setLocations] = useState<locationType[]>([]);

  const updateWeight = (e: React.FormEvent<HTMLInputElement>) => {
    let localWeight = parseInt(e.currentTarget.value);
    if (!Number.isInteger(localWeight)) {
      e.currentTarget.value = "";
      e.currentTarget.placeholder = "Enter a number!";
      return;
    }
    e.currentTarget.value = localWeight + "kgs";
    setWeight(localWeight);
    console.log(localWeight);
  };

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
          {/* <CheckboxGrid sizes={kites} setSizes={setKites} /> */}
          <input
            type="text"
            className="input-weight"
            placeholder="Enter weight in kgs"
            onBlur={updateWeight}
          />
        </div>
      </section>
      <LocationGrid />
    </body>
  );
}

function getLocationData(url: string): any {}
