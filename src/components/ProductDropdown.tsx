"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductDropdownProps {
  title: string;
  borderBottom: boolean;
}

export const ProductDropdown = ({
  title,
  borderBottom,
}: ProductDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col gap-[8px] w-full ${
        borderBottom && "border-b-[1px] border-[#edeef2]"
      }`}
    >
      <div
        className="flex justify-between items-center w-full h-[56px] cursor-pointer"
        onClick={handleDropdown}
      >
        <span className="text-[16px] text-[#1f2024] font-light tracking-[-0.01em]">
          {title}
        </span>
        <div className="flex justify-center items-center w-[24px] h-[24px]">
          <Image
            src={isOpen ? "minus.svg" : "plus.svg"}
            alt="Plus icon"
            width={12}
            height={12}
            className="w-auto h-auto"
          />
        </div>
      </div>
      {isOpen && <div className="h-[100px] bg-[#000000]"></div>}
    </div>
  );
};
