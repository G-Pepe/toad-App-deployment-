import React from "react";

export const Help = () => {
  return (
    <div style={{ width: "30%" }}>
      <ul>
        <li style={{ backgroundColor: "navy", height: "30px", padding: "5px" }}>
          No priority
        </li>
        <li
          style={{
            backgroundColor: "lightskyblue",
            height: "30px",
            padding: "5px",
          }}
        >
          Low priority
        </li>
        <li
          style={{ backgroundColor: "yellow", padding: "5px", height: "30px" }}
        >
          Normal priority
        </li>
        <li
          style={{ backgroundColor: "crimson", padding: "5px", height: "30px" }}
        >
          Medium priority
        </li>
        <li style={{ backgroundColor: "Red", padding: "5px", height: "30px" }}>
          High Priority
        </li>
      </ul>
    </div>
  );
};
