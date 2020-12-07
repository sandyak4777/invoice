import React from "react";
import InputFields from "../../inputFields/InputFields";
import today from "./Date";

function DatePick() {
  return (
    <div>
      <InputFields placeholder={today} />
    </div>
  );
}

export default DatePick;
