import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <div>
        <Link to="/">
          <h1 className="header">This is my ToDo App</h1>
        </Link>
      </div>
      <div>
        <Link to={"./Help"}>Help </Link>
      </div>
    </nav>
  );
}
