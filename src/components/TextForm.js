import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here");
  const handleUpClick = () => {
    // console.log("Uper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Onchange fuction");
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          rows="3"
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn bg-primary" onClick={handleUpClick}>
        Convert to UperCase
      </button>
    </div>
  );
}
