"use client";
import React, { useState } from "react";
import { CheckboxGrid, WeightBox, LocationBox } from "./entities";
import { LocationGrid } from "./location";
import type { locationType } from "./types.ts";
import "../../css/page.css";
import "../../css/locations.css";

("use strict");

export default function Page() {
  const [kites, setKites] = useState<number[]>([]);
  const kiteSizes = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17];
  const [weight, setWeight] = useState<number>(0);
  const [locations, setLocations] = useState<locationType[]>([]);

  return (
    <body>
      <section className="top-banner">
        <div className="header-grid">
          <h1 className="heading">Should I go Kiting?</h1>
          <LocationBox locations={locations} setLocations={setLocations} />
        </div>
        <div className="header-grid">
          <h2 className="kites-heading">Kite Quiver</h2>
          <CheckboxGrid
            kiteSizes={kiteSizes}
            kites={kites}
            setKites={setKites}
          />
          <WeightBox setWeight={setWeight} />
        </div>
      </section>
      <LocationGrid locations={locations} />
    </body>
  );
}
