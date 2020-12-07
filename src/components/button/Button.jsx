import React from "react";
import "./btn.css";
function Button(props) {
  return (
    <div>
      <button className="btn">{props.name}</button>
    </div>
  );
}

export default Button;
