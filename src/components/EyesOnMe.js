// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {

  function handleFocus(event) {
    console.log("Good!");
  }

  function handleBlur(event) {
    console.log("Hey! Eyes on me!");
  }

  return (
    <div>
      <button type="button" name="eyesbutton" onFocus={() => handleFocus()} onBlur={() => handleBlur()} >Eyes on me</button>

    </div>
  )
}

export default EyesOnMe;
