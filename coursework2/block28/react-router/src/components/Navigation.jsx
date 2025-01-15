import { Link } from "react-router-dom";
import React from "react";

export default function Navigation() {
  return (
    <div id="navbar">
      <Link to={"/"}>
        <h2>home</h2>
      </Link>

      <Link to={"/blue"}>
        <h2>blue</h2>
      </Link>

      <Link to={"/red"}>
        <h2>red</h2>
      </Link>
    </div>
  );
}
