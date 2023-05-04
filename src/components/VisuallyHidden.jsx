import React from "react";

// Source: https://www.joyofreact.com

function VisuallyHidden({ children }) {
  const hiddenStyles = {
    display: "inline-block",
    position: "absolute",
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0,
  };

  return <h1 style={hiddenStyles}>{children}</h1>;
}

export default VisuallyHidden;
