import React from "react";
import url from "../assets/spinner.gif";
export default function Spinner() {
  return (
    <div className="spinner">
      <img src={url} alt="spinner" />
    </div>
  );
}
