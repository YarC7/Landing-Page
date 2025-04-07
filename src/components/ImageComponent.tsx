"use client";

import { useState, useEffect } from "react";
import { useImageUrlContext } from "../context/imageContext";
export default function ImageGalleryStreamer() {
  const [inputUrl, setInputUrl] = useState("");
  // const [images, setImages] = useState<string[]>([]);
  const { images, setImages } = useImageUrlContext();
  const [error, setError] = useState("");
  const handleRemoveImage = (indexToRemove: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleAddImage = (e : any) => {
    e.preventDefault();
    setError("");

    // Kiểm tra xem ảnh load được không
    const img = new Image();
    img.onload = () => {
      setImages((prev) => [...prev, inputUrl]);
      setInputUrl("");
    };
    img.onerror = () => {
      setError("Invalid image URL. Please try another one.");
    };
    img.src = inputUrl;
  };

  return (
    <div className="container mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-center">
        🖼️ Image Gallery Streamer
      </h1>

      <div className="flex gap-2">
        <input
          type="text"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Paste image URL..."
          className="flex-1 p-2 border rounded"
        />
        <button
          onClick={handleAddImage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {images.map((url, index) => (
            <div key={index} className="rounded overflow-hidden relative">
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
              <button
              type="button"
                className="remove-btn absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold hover:bg-red-600 transition duration-200"
                onClick={() => handleRemoveImage(index)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
