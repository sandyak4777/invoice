import React, { useState } from "react";

function InvoiceNum() {
  const [invoice_num, setinvoice_num] = useState("");
  const handleChange = (e) => {
    setinvoice_num(e.target.value);
    sessionStorage.setItem("invoice", invoice_num);
  };

  return (
    <div>
      <h2>INVOICE</h2>
      <textarea
        placeholder="# Invoice Number"
        value={invoice_num}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default InvoiceNum;
