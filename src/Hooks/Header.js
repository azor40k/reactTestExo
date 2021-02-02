import React, { useState, useEffect } from "react";
import "../Css/Header.scss";

function Header() {
  let [color, setColor] = useState("aqua");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollWin = window.scrollY;
      let newColor = scrollWin > 0 ? "red" : "aqua";
      setColor(newColor);
    });
  });

  return (
    <div className="Header">
      <header  className={color}>
        <h1>HEADER</h1>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
        <p>p</p>
      </header>
    </div>
  );
}
export default Header;
