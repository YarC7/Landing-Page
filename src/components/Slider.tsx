"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { id: 1, img: "/demo/a (1).webp" },
  { id: 2, img: "/demo/a (2).webp" },
  { id: 3, img: "/demo/a (3).webp" },
  { id: 4, img: "/demo/a (4).webp" },
  { id: 5, img: "/demo/a (5).webp" },
  { id: 6, img: "/demo/a (6).webp" },
  { id: 7, img: "/demo/a (7).webp" },
  { id: 8, img: "/demo/a (8).webp" },
  { id: 9, img: "/demo/a (9).webp" },
  { id: 10, img: "/demo/a (10).webp" },
  { id: 11, img: "/demo/a (11).webp" },
  { id: 12, img: "/demo/a (12).webp" },
];
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); //5s to next image

    return () => clearInterval(interval);
  }, []);
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
              src={`${image.img}?q=70`}
              fill
              className="object-cover"
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
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
  );
};

export default Slider;
