import React, { useState } from "react";
import './Menu.css';
import MenuItem from "./MenuItem";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <ul className="menu__ul">
          <li><Link to='/'>Консультация</Link></li>
          <li><Link to='/pratice'>Практика</Link></li>
          <li><Link to='/innovation'>Инновации</Link></li>
      </ul>
    </div>
  );
}

export default Menu;
