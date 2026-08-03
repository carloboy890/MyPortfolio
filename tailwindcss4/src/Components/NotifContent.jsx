import React, { useState } from "react";

function NotifContent() {
  const slides = [
    {
      id: 1,
      title: "Website Assistant",
      desc: "An AI assistant for the portfolio.",
    },
    {
      id: 2,
      title: "New Projects",
      desc: "More React and MERN projects coming soon.",
    },
    {
      id: 3,
      title: "Portfolio Update",
      desc: "Improved animations, Faster Loading and responsiveness.",
    },
    {
      id: 4,
      title: "Loading Screen",
      desc: "Improved animations and responsiveness.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="space-y-7">
      <div>
        <h2 className="text-5xl text-center">Next Update</h2>
      </div>
      <div className="w-full max-w-md mx-auto">
        <div
          className="bg-[#222] text-white rounded-xl p-6
        min-h-[180px] flex flex-col justify-center"
        >
          <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>

          <p className="mt-3">{slides[currentSlide].desc}</p>
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-gray-700 rounded-lg cursor-pointer"
          >
            Prev
          </button>

          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-gray-700 rounded-lg cursor-pointer"
          >
            Next
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotifContent;
