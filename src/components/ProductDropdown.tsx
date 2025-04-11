"use client";

import { useState } from "react";
import Image from "next/image";
import { DropdownGraph, DropdownGraphProps } from "./DropdownGraph";

export interface ProductDropdownProps {
  title: string;
  borderBottom: boolean;
  text?: string;
  list?: string[];
  label?: {
    icon: string;
    content: string;
  };
  learnMore?: boolean;
  graph?: DropdownGraphProps;
  iconType?: "payment" | "social";
  iconList?: string[];
}

export const ProductDropdown = ({
  title,
  borderBottom,
  text,
  list,
  label,
  learnMore,
  graph,
  iconType,
  iconList,
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
      {isOpen && (
        <div className="h-max pb-[13.5px]">
          {(text || label) && (
            <div className="flex flex-col gap-[8px]">
              {label && (
                <div className="flex items-center gap-[8px]">
                  <div className="flex justify-center items-center w-[24px] h-[24px]">
                    <Image
                      src={label.icon}
                      alt="Label icon"
                      width={16}
                      height={18}
                      className="w-auto h-auto"
                    />
                  </div>
                  <span className="text-[16px] text-[#090a0d] font-light tracking-[-0.01em]">
                    {label.content}
                  </span>
                </div>
              )}
              {text && (
                <span className="text-[16px] text-[#545661] tracking-[-0.01em] leading-[24px] mr-[55px]">
                  {text}
                </span>
              )}
            </div>
          )}
          {graph && (
            <DropdownGraph periods={graph.periods} months={graph.months} />
          )}
          {list && (
            <ul className="list-disc text-[16px] text-[#545661] tracking-[-0.01em] leading-[24px] pl-[24.5px] pr-[70px]">
              {list.map((item, index) => (
                <li key={index} className="pl-[-8px]">{item}</li>
              ))}
            </ul>
          )}
          {iconList && (
            <div className="flex flex-wrap gap-[16px] w-full pr-[60px]">
              {iconList.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-center items-center ${
                    iconType === "payment" ? "w-[35px]" : "w-[24px]"
                  } h-[24px] cursor-pointer`}
                >
                  <Image
                    src={item}
                    alt={
                      iconType === "payment" ? "Payment icon" : "Social icon"
                    }
                    width={iconType === "payment" ? 35 : 24}
                    height={24}
                    className="w-auto h-auto"
                  />
                </div>
              ))}
            </div>
          )}
          {learnMore && (
            <div className="flex items-center gap-[6px] mt-[13px] cursor-pointer">
              <span className="text-[14px] text-[#090a0d] font-light tracking-[-0.01em]">
                Learn More
              </span>
              <div className="flex justify-center items-center h-[16px]">
                <Image
                  src="arrow-right.svg"
                  alt="Arrow icon"
                  width={12}
                  height={10}
                  className="w-auto h-auto"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
