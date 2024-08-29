"use client";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel({
  children: slides,
  autoSlide = true,
  autoSlideInterval = 2000,
}: any) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="cursor-pointer overflow-hidden relative rounded-xl">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-white bg-opacity-10 text-gray-300 hover:bg-white hover:text-yellow-400 font-semibold"
        >
          <FaChevronLeft size={25} />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-white bg-opacity-10 text-gray-300 hover:bg-white hover:text-yellow-400 font-semibold"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_: any, i: number) => (
            <div
              className={`
              transition-all w-3 h-1 bg-white rounded-sm
              ${curr === i ? "bg-yellow-400" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
