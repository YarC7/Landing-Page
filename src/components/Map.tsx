"use client";
import React from "react";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const destination = {
  lat: 10.792,
  lng: 106.707,
};

const Map = () => {
  const openGoogleMaps = () => {
    window.open("https://shorturl.at/H4g2u", "_blank");
  };
  return (
    <div
      className="map-container  "
      onClick={openGoogleMaps}
      style={{ cursor: "pointer", }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4785547150383!2d106.7060396!3d10.7923028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c61e60a431%3A0xf6f30293baa262f0!2sHQN-Architects%20Thi%E1%BA%BFt%20k%E1%BA%BF%20Ki%E1%BA%BFn%20tr%C3%BAc-N%E1%BB%99i%20th%E1%BA%A5t-C%E1%BA%A3nh%20quan!5e0!3m2!1sen!2s!4v1698694176259!5m2!1sen!2s&zoom=100"
        width="100%"
        height="450"
        style={{ borderRadius: "15px" ,backgroundColor: "#FFFFFF", aspectRatio: "1 / 1"}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
