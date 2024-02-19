import React, { useState } from "react";
import { location_type } from "./types";
import { getCoordsFromName, getDataFromCoords } from "./location";

("use strict");

function Checkbox(props: {
  key: number;
  kiteSize: number;
  kites: number[];
  setKites: (val: number[]) => void;
}) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): any {
    let checked = event.target.checked;
    let kites = props.kites;
    if (checked && !kites.includes(props.kiteSize)) {
      // Add the size to the array without directly modifying the original array
      props.setKites([...kites, props.kiteSize]);
    } else if (!checked && kites.includes(props.kiteSize)) {
      // Remove the size from the array without directly modifying the original array
      props.setKites(kites.filter((value) => value !== props.kiteSize));
    }
  }

  return (
    <label className="kite-checkbox">
      <input
        id={`${props.kiteSize}m`}
        type="checkbox"
        onChange={handleChange}
      />
      {props.kiteSize}m
    </label>
  );
}

export function CheckboxGrid(props: {
  kiteSizes: number[];
  kites: number[];
  setKites: (val: number[]) => void;
}) {
  let checkboxes = props.kiteSizes.map(function (size) {
    return (
      <Checkbox
        key={size}
        kiteSize={size}
        kites={props.kites}
        setKites={props.setKites}
      />
    );
  });
  return <div className="kites-grid">{checkboxes}</div>;
}

export function WeightBox(props: { setWeight: (val: number) => void }) {
  const updateWeight = (e: React.FormEvent<HTMLInputElement>) => {
    let localWeight = parseInt(e.currentTarget.value);
    if (!Number.isInteger(localWeight)) {
      e.currentTarget.value = "";
      e.currentTarget.placeholder = "Enter a number!";
      return;
    }
    e.currentTarget.value = localWeight + "kgs";
    props.setWeight(localWeight);
  };

  return (
    <input
      type="text"
      className="input-weight"
      placeholder="Enter weight in kgs"
      onBlur={updateWeight}
    />
  );
}

export function LocationBox(props: {
  locations: location_type[];
  setLocations: (val: location_type[]) => void;
}) {
  async function addLocation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //element selectors
    let form = event.currentTarget;
    let msg = document.querySelector<HTMLSpanElement>(".msg")!;
    let input = document.querySelector<HTMLInputElement>(".input-city")!;
    let inputVal = input.value //process input text
      .toLowerCase()
      .replace(" ", "")
      .replace("uk", "gb");
    let coords = await getCoordsFromName(inputVal);

    if (coords.name !== "Undefined") {
      //check for duplicate location
      if (props.locations.length > 0) {
        const filteredArray = props.locations.filter(
          (value) => value.name == coords.name && value.country == coords.country
        );
        if (filteredArray.length > 0) {
          msg.textContent = `You already know the weather for ${filteredArray[0].name} ...otherwise be more specific by providing the country code as well`;
          form.reset();
          input.focus();
          return;
        }
      }

      const locData =  await getDataFromCoords(coords.lat, coords.lon);
      const newLoc: location_type = {
        name: coords.name,
        country: coords.country,
        lat: coords.lat,
        long: coords.lon,
        data: locData,
      };
      const newLocations = [...props.locations, newLoc];
      props.setLocations(newLocations); //replace global array
      msg.textContent = "";
    } else {
      console.log("ENTER");
      msg.textContent = "Please search for a valid city!";
    }
    form.reset();
    input.focus();
  }
  return (
    <form onSubmit={addLocation}>
      <input
        type="text"
        className="input-city"
        placeholder="Search for a city"
        autoFocus
      />
      <button type="submit">SUBMIT</button>
      <span className="msg"></span>
    </form>
  );
}
