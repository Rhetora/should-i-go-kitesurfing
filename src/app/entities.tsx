import React, { useState } from "react";
import { locationType } from "./types";
import { getLocationFromName } from "./location";

("use strict");

function Checkbox(props: {
  key: number;
  size: number;
  kites: number[];
  setKites: (val: number[]) => void;
}) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>): any {
    let checked = event.target.checked;
    let kites = props.kites;
    if (checked && !kites.includes(props.size)) {
      // Add the size to the array without directly modifying the original array
      props.setKites([...kites, props.size]);
    } else if (!checked && kites.includes(props.size)) {
      // Remove the size from the array without directly modifying the original array
      props.setKites(kites.filter((value) => value !== props.size));
    }
  }

  return (
    <label className="kite-checkbox">
      <input id={`${props.size}m`} type="checkbox" onChange={handleChange} />
      {props.size}m
    </label>
  );
}

export function CheckboxGrid(props: {
  sizesAvailable: number[];
  kites: number[];
  setKites: (val: number[]) => void;
}) {
  let checkboxes = props.sizesAvailable.map(function (size) {
    return (
      <Checkbox
        key={size}
        size={size}
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
  locations: locationType[];
  setLocations: (val: locationType[]) => void;
}) {
  function addLocation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //element selectors
    let form = event.currentTarget;
    let msg = document.querySelector<HTMLSpanElement>(".msg")!;
    let input = document.querySelector<HTMLInputElement>(".input-city")!;
    let inputVal = input.value //process input text
      .toLowerCase()
      .replace(" ", "")
      .replace("uk", "gb");

    //check for duplicate location
    if (props.locations.length > 0) {
      const filteredArray = props.locations.filter(
        (value) => value.name == inputVal
      );
      if (filteredArray.length > 0) {
        msg.textContent = `You already know the weather for ${filteredArray[0].name} ...otherwise be more specific by providing the country code as well`;
        form.reset();
        input.focus();
        return;
      }
    }

    //get location from input
    let newLoc: locationType = getLocationFromName(inputVal);
    if (newLoc.name != "InvalidCity") {
      const newLocations = [...props.locations, newLoc];
      props.setLocations(newLocations); //replace global array
    } else {
      msg.textContent = "Please search for a valid city!";
    }
    msg.textContent = "";
    form.reset();
    input.focus();

    console.log(props.locations);
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
