import React, { useState } from "react";

function InputFields(props) {
  const [field, setFeild] = useState();
  return (
    <input
      type="text"
      value={field}
      onChange={(e) => setFeild(e.target.value)}
      placeholder={props.placeholder}
      style={{
        padding: `${props.padding}`,
        width: `${props.width}`,
        marginRight: `${props.margin}`,
        placeholder: `${props.placeholder}`,
      }}
    />
  );
}

export default InputFields;
