import React from "react";

("use strict");

function Location(props: { data: any }) {
  return (
    <div>
      <h1 className="close-container">
        <button className="close-button">X</button>
      </h1>
      <div className="city">
        <div className="city-grid">
          <h2 className="city-name" data-name="${name},${sys.country}">
            <span>"test"</span>
            <sup>$"test c"</sup>
          </h2>
        </div>
      </div>
    </div>
  );
}

function LocationGrid() {
  let locations: string[] = [];
  return (
    <section className="ajax-section">
      <div className="container">
        {locations.map((loc) => (
          <Location data={"test"} />
        ))}
      </div>
    </section>
  );
}

export default LocationGrid;
