import React from "react";

const CtmButton = ({ Text = "Click" }) => {
  // Split text into characters
  const letters = Text.split("");

  return (
    <button className="relative  font-bold text-white rounded-full cursor-pointer w-[120px] h-[42.66px] bg-[#3653f8] flex justify-center items-center overflow-hidden group">
      {/* First set of letters */}
      <span className="flex overflow-hidden group-hover:absolute">
        {letters.map((char, index) => (
          <span
            key={`first-${index}`}
            className={`transition-transform duration-${200 + index * 100} group-hover:translate-y-[1.2em]`}
          >
            {char}
          </span>
        ))}
      </span>

      {/* Second set of letters */}
      <span className="flex absolute overflow-hidden">
        {letters.map((char, index) => (
          <span
            key={`second-${index}`}
            className={`transition-transform duration-${200 + index * 100} -translate-y-[1.2em] group-hover:translate-y-0`}
          >
            {char}
          </span>
        ))}
      </span>
    </button>
  );
};

export default CtmButton;
