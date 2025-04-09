"use client";

import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  slides: string[];
}

export const Carousel = ({ slides }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div className="flex items-center h-[680]">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <Image
              key={index}
              src={slide}
              alt="Gallery image"
              width={809}
              height={382}
              className="w-[809px] h-[382px]"
            />
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-[17px]">
          <button
            className="flex justify-center items-center w-[40px] h-[40px] bg-[#fafafc] rounded-full border border-[#dfe0e8] cursor-pointer"
            onClick={prev}
          >
            <Image
              src="/chevron-left.svg"
              alt="Back arrow"
              width={8}
              height={12}
            />
          </button>
          <button
            className="flex justify-center items-center w-[40px] h-[40px] bg-[#fafafc] rounded-full border border-[#dfe0e8] cursor-pointer"
            onClick={next}
          >
            <Image
              src="/chevron-right.svg"
              alt="Forward arrow"
              width={8}
              height={12}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
