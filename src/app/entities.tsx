import React, {useState} from "react";
import type { kitesKeyPairType } from "./types";

("use strict");

function Checkbox(props: { size: kitesKeyPairType }) {
  const handleClick = () => {
    alert("Hello!");
  };

  return (
    <label className="kite-checkbox">
      <input id={`${props.size.size}m`} type="checkbox" onClick={handleClick} />
      {props.size.size}m
    </label>
  );
}

function CheckboxGrid(props: { sizes: Map<number, boolean>, setSizes: (value: boolean | ((prevVar: boolean) => boolean)) => void;}) {
  return (
    <div className="kites-grid">
      {props.sizes.forEach((value: number, key: boolean) => {
    <Checkbox size = {value} />
});
    }
    </div>
  );
}

export default CheckboxGrid;
