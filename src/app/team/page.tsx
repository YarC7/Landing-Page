"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
const images = [
  {
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1664699106133-c338e54d395b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1598016677484-ad34c3fd766e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1607570838997-65f270035031?q=80&w=1688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    img: "https://plus.unsplash.com/premium_photo-1678544364459-34d41d823516?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  //   }, 5000); //5s to next image

  //   return () => clearInterval(interval);
  // }, []);
  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Move to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  return (
    <div>
      <div className="relative pt-12 flex items-center w-1/2 mx-auto ">
        <div id="default-carousel" className="relative w-full h-full z-0">
          <div className="relative h-[360px] w-full overflow-hidden xl:h-[850px]">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.img}
                  fill
                  className="object-cover w-full h-full"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          {/* Pagination Dots */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-3 rtl:space-x-reverse">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-lama" : "bg-gray-400"
                }`}
                aria-current={index === currentIndex}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
          {/* Previous Button */}
          <button
            type="button"
            className="absolute top-0 -left-16 start-0 flex items-center justify-center h-full px-4 cursor-pointer"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
              <svg
                className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          {/* Next Button */}
          <button
            type="button"
            className="absolute -top-0 -right-16 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
              <svg
                className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <div className="p-24 text-center w-2/3 mx-auto">
        Basile Graux . Koen Baeyens . Fréderic Louis . Brice Hebbelynck .
        Gert-Jan Claus . Wout Vandermeersch . Antje Verhellen . Tom Cauwels .
        Lara Vekemans
      </div>
    </div>
  );
};

export default Team;
