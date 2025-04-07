"use client";
import React, { createContext, useState, useContext } from "react";

type ImageUrlContextType = {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
};
const ImageUrlContext = createContext<ImageUrlContextType | undefined>(
  undefined
);
export const useImageUrlContext = () => {
  const context = useContext(ImageUrlContext);
  if (!context)
    throw new Error("useImageContext must be used within ImageProvider");
  return context;
};

export const ImageContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [images, setImages] = useState<string[]>([]);

  return (
    <ImageUrlContext.Provider value={{ images, setImages }}>
      {children}
    </ImageUrlContext.Provider>
  );
};
