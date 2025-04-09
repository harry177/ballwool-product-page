import Image from "next/image";

export interface AsideIconBoxProps {
  icon: string;
  count?: number;
}

export const AsideIconBox = ({ icon, count }: AsideIconBoxProps) => {
  return (
    <div className="relative flex justify-center items-center w-[24px] h-[24px] box-content p-[12px]">
      <Image
        src={icon}
        alt="Aside icon"
        width={24}
        height={24}
        className="w-auto h-auto cursor-pointer"
      />
      {count && (
        <span className="absolute flex justify-center items-center h-[16px] top-[7px] left-[25px] bg-[#1f2024] min-w-[16px] rounded-[100px] text-[#fafafc] text-[10px] pl-[2px] pr-[2px] leading-7">
          {count}
        </span>
      )}
    </div>
  );
};
