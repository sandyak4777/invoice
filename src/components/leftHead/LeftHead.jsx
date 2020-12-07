import React from "react";
import BillTo from "./billTo/BillTo";
import Brand from "./brand/Brand";

function LeftHead() {
  return (
    <div>
      <Brand />
      <BillTo />
    </div>
  );
}

export default LeftHead;
