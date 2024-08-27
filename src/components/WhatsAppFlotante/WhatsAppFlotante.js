import React, { useEffect, useState } from "react";
import { getFirestore } from "../../config/firebase";
import logoWhatsapp from "../../assets/img/logoWhatsapp.png";
import "./whatsapp.scss";

const WhatsAppFlotante = () => {
  return (
    <div className="whatsapp-container">
      <a
        className="btn-whatsapp-flotante"
        href={"https://api.whatsapp.com/send/?phone=5493516825130"}
        target="_blank"
        rel="noreferrer"
      >
        <img src={logoWhatsapp} alt="whatsapp" />
      </a>
    </div>
  );
};

export default WhatsAppFlotante;
