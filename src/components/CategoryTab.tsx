import Image from "next/image";

interface CategoryTabProps {
  category: string;
  bottomBorder: boolean;
}

export const CategoryTab = ({ category, bottomBorder }: CategoryTabProps) => {
  return (
    <div
      className={`flex justify-between items-center w-full h-[56px] cursor-pointer ${
        bottomBorder && "border-b-[1px] border-[#edeef2]"
      }`}
    >
        <span className="text-[16px] font-light tracking-[-0.01em]">{category}</span>
        <div className="flex justify-center items-center w-[20px] h-[20px]">
            <Image src="category-chevron.svg" alt="Arrow right" width={10} height={10} className="w-auto h-auto" />
        </div>
    </div>
  );
};
