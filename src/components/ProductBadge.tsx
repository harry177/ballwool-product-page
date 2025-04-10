import Image from "next/image";

interface ProductBadgeProps {
  icon: string;
  content: string;
}

export const ProductBadge = ({ icon, content }: ProductBadgeProps) => {
  return (
    <div className="flex items-center gap-[8px] h-[24px] bg-[#edeef2] px-[6px] py-[4px]">
      <div className="flex justify-center items-center w-[16px] h-[16px]">
        <Image
          src={icon}
          alt="Badge icon"
          width={10}
          height={10}
          className="w-auto h-auto"
        />
      </div>
      <span className="text-[14px] text-[#1f2024] tracking-[-0.005em]">{content}</span>
    </div>
  );
};
