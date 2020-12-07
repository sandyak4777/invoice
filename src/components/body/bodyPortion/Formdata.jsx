import React, { useState } from "react";
import Button from "../../button/Button";
import GenerateInvoice from "../../generateInvoice/GenerateInvoice";

function Formdata() {
  const [inputField, setInputField] = useState([
    { item: "", quantity: 0, rate: 0 },
  ]);
  const [gen, setGen] = useState("visible");
  const [gen2, setGen2] = useState("hidden");
  const [totalAmount, setTotalAmount] = useState(0);

  const handleChange = (index, event) => {
    const values = [...inputField];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
    let sum = 0;
    for (let i = 0; i <= values.length - 1; i++) {
      let amount = values[i].quantity * values[i].rate;
      sum = amount + sum;
    }
    setTotalAmount(sum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = inputField;
    console.log(JSON.stringify(JSON.stringify(obj)));
    console.log(inputField);
  };

  const handleAddFields = () => {
    setInputField([...inputField, { item: "", quantity: 0, rate: 0 }]);
  };

  const handleSubtractFields = (index) => {
    const values = [...inputField];
    let amount = values[index].quantity * values[index].rate;
    setTotalAmount(totalAmount - amount);
    values.splice(index, 1);
    setInputField(values);
  };

  const generateInvoice = () => {
    setGen("hidden");
    setGen2("visible");
  };
  return (
    <div className="App" style={{ width: "70%", margin: "auto", display: gen }}>
      <form onSubmit={handleSubmit}>
        {inputField.map((inputField, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            <input
              type="text"
              placeholder="item"
              name="item"
              value={inputField.item}
              onChange={(event) => handleChange(index, event)}
              style={{ width: "40%", padding: "10px" }}
            />
            <input
              type="number"
              placeholder="Quantity"
              name="quantity"
              value={inputField.quantity}
              onChange={(event) => handleChange(index, event)}
              style={{ width: "10%", padding: "10px", margin: "10px" }}
            />
            <input
              type="number"
              placeholder="Rate"
              name="rate"
              value={inputField.rate}
              onChange={(event) => handleChange(index, event)}
              style={{ width: "10%", padding: "10px", margin: "10px" }}
            />
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              value={inputField.rate * inputField.quantity}
              style={{ width: "10%", padding: "10px", margin: "10px" }}
            />
            <span
              style={{
                background: "grey",
                cursor: "pointer",
                padding: "5px 10px",
                margin: "5px",
              }}
              onClick={() => handleSubtractFields(index)}
            >
              -
            </span>
            <span
              style={{
                background: "grey",
                cursor: "pointer",
                padding: "5px 10px",
                margin: "10px 5px",
              }}
              onClick={() => handleAddFields()}
            >
              +
            </span>
          </div>
        ))}
      </form>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid grey",
          borderBottom: "1px solid grey",
          justifyContent: "flex-end",
        }}
      >
        Total Amount: {totalAmount}
      </div>
      <button className="btn" onClick={generateInvoice}>
        Generate Invoice
      </button>
      <GenerateInvoice
        display={gen2}
        inputField={inputField}
        totalAmount={totalAmount}
      />
    </div>
  );
}

export default Formdata;
