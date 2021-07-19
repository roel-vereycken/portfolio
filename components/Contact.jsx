import React from "react";
import { Phone, Mail, Home } from "@material-ui/icons";

export default function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <div className="contactInfo">
          <div className="box">
            <Mail className="icon" />
            <div className="text">
              <h3>Stuur een email</h3>
              <p>vereyckenroel@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <Phone className="icon" />
            <div className="text">
              <h3>Telefoonnummer</h3>
              <p>0471 32 18 55</p>
            </div>
          </div>
          <div className="box">
            <Home className="icon" />
            <div className="text">
              <h3>Adres</h3>
              <p>2850 Boom</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="contactForm">
          <h2>Contact</h2>
          <form action="">
            <h2>Send message</h2>

            <div className="inputbox">
              <input type="text" required="required" />
              <span>Voornaam</span>
            </div>
            <div className="inputbox">
              <input type="text" required="required" />
              <span>Naam</span>
            </div>
            <div className="inputbox">
              <input type="text" required="required" />
              <span>Email</span>
            </div>
            <div className="inputbox">
              <textarea required="required"></textarea>
              <span>Bericht</span>
            </div>
            <button type="submit">Verzend</button>
          </form>
        </div>
      </div>
    </div>
  );
}
