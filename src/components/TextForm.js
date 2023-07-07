import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    // console.log("Uper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("Onchange fuction");
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  return (
    <>
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
        <button className="btn bg-primary mx-1" onClick={handleUpClick}>
          Convert to UperCase
        </button>

        <button className="btn bg-primary mx-1" onClick={handleLowClick}>
          Convert to Lower case
        </button>

        <button className="btn bg-primary mx-1" onClick={handleClearClick}>
          Clear Test
        </button>
      </div>
      <div className="container my-2">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
