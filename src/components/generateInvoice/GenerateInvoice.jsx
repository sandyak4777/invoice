import React from "react";

function GenerateInvoice(props) {
  console.log(props);
  return (
    <div className="generateInvoice" style={{ visibility: props.display }}>
      <h1>{sessionStorage.getItem("name")} Invoice</h1>
      <small>Date: {sessionStorage.getItem("data")}</small>
      <br />
      <small>Invoice No: #{sessionStorage.getItem("invoice")}</small>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.inputField.map((input, index) => (
            <tr key={index}>
              <td>{input.item}</td>
              <td>{input.quantity}</td>
              <td>{input.rate}</td>
              <td>{input.quantity * input.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
          justifyContent: "flex-end",
        }}
      >
        Total Amount: {props.totalAmount}
      </div>
    </div>
  );
}

export default GenerateInvoice;
