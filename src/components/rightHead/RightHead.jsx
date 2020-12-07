import React from "react";
import DatePick from "./datePick/DatePick";
import InvoiceNum from "./invoiceNum/InvoiceNum";

function RightHead() {
  return (
    <div>
      <InvoiceNum />
      <DatePick />
    </div>
  );
}

export default RightHead;
