export interface DropdownGraphProps {
  periods: { period: string; isSelected?: boolean }[];
  months: {
    points: number;
    monthName: string;
    isSelected?: boolean;
  }[];
}

export const DropdownGraph = ({ periods, months }: DropdownGraphProps) => {
  return (
    <div className="flex flex-col gap-[12px] w-full h-[120px] mt-[12px]">
      <div className="flex items-center gap-[16.5px] h-[24px]">
        {periods.map((item, index) => (
          <span
            key={index}
            className={`text-[14px] ${
              item.isSelected ? "text-[#090a0d]" : "text-[#848793]"
            } font-light leading-[16px] tracking-[-0.01em] cursor-pointer`}
          >
            {item.period}
          </span>
        ))}
      </div>
      <div className="flex justify-between w-[420px]">
        {months.map((month, index) => (
          <div
            key={index}
            className="flex flex-col justify-end items-center gap-[4px] cursor-pointer"
          >
            <div
              className={`w-[24px] rounded-[4px] ${
                month.isSelected ? "bg-[#090a0d]" : "bg-[#dfe0e8]"
              }`}
              style={{ height: `${month.points}px` }}
            ></div>
            <span
              className={`text-[14px] ${
                month.isSelected ? "text-[#090a0d]" : "text-[#848793]"
              } leading-[16px] tracking-[-0.01em]`}
            >
              {month.monthName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
