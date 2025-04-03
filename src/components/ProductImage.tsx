"use client";
import Image from "next/image";
import React, { useState } from "react";
const ProductImage = ({ items }: { items: any }) => {
  const [index, setIndex] = useState(0);

  // Move to the next slide
  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Move to the previous slide
  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="">
      <div className="">
        <div className="h-[500px] lg:h-[810px] relative aspect-w-16 aspect-h-9">
          <Image
            src={items[index].image.url}
            alt=""
            fill
            className="object-conver rounded-md"
          />
          {/* Previous Button */}
          <button
            type="button"
            className="absolute top-1/2 md:-left-14 left-0 transform -translate-y-1/2  flex items-center justify-center  px-4 cursor-pointer"
            onClick={handlePrev}
          >
            <span className="inline-flex hover:bg-slate-200 items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
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
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>

          {/* Next Button */}
          <button
            type="button"
            className="absolute top-1/2 md:-right-14 right-0 transform -translate-y-1/2 flex items-center justify-center  px-4 cursor-pointer"
            onClick={handleNext}
          >
            <span className="inline-flex  hover:bg-slate-200 items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60">
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
      <div className="m-4">Featured Images:</div>
      <div className="flex gap-4 overflow-x-auto ">
        {items.map((item: any, i: number) => (
          <div
            className="w-40 h-24 relative cursor-pointer flex-shrink-0"
            key={item.id ?? i}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
