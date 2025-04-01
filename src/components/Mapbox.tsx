"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const openGoogleMaps = () => {
    window.open("https://shorturl.at/H4g2u", "_blank");
  };
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN) {
      console.error("Missing Mapbox Access Token");
      return;
    }
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    if (!mapContainerRef.current || mapRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/canh177/cm8y306kb001a01qr9uatg9wn",
      center: [106.7333374490747, 10.79615495608859],

      zoom: 10,
    });
    // Thêm marker vào vị trí trung tâm
    new mapboxgl.Marker({
      color: "#AAAAAA",
    })
      .setLngLat([106.7333374490747, 10.79615495608859])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<strong>Delta-Atelier Architect</strong><p> Lorem ipsum dolor sit amet consectetur adipisicing elit! </hr> <a href="https://shorturl.at/jK2t3" target="_blank">Google Map</a> </p>'
        )
      )
      .addTo(mapRef.current);
    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={mapContainerRef} className="w-full min-h-[500px]" />;
};

export default MapBox;
