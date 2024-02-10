import React, { useState } from "react";

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
