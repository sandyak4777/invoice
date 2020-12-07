import React, { useState } from "react";

function BillTo() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
    sessionStorage.setItem("name", name);
  };
  return (
    <div>
      <label htmlFor="bill">Bill To</label>
      <textarea
        placeholder="Who is this to? ('required')"
        id="bill"
        cols="40"
        rows="4"
        style={{ width: "100%" }}
        value={name}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default BillTo;
