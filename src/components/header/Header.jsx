import React from "react";
import LeftHead from "../leftHead/LeftHead";
import RightHead from "../rightHead/RightHead";

function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "70%",
        margin: "20px auto",
      }}
    >
      <LeftHead />
      <RightHead />
    </div>
  );
}

export default Header;
