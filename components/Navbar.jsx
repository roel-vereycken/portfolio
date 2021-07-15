import React from "react";
import { Phone, Mail } from "@material-ui/icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <h3>Roel Vereycken</h3>
        </div>
        <div className="itemContainer">
          <div className="card">
            <Phone className="icon" />
            <span>+324 71 32 18 55</span>
          </div>
          <div className="card">
            <Mail className="icon" />
            <span>vereyckenroel@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>Over mij</li>
          <li>Projecten</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
