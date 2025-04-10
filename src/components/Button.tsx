export interface ButtonProps {
  variant: "primary" | "secondary" | "third" | "empty";
  size: "big" | "small";
  content: string;
}

export const Button = ({ variant, size, content }: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center ${
        size === "big"
          ? "w-full h-[56px] text-[18px]"
          : "h-[32px] text-[14px] px-[16px] py-[8px]"
      } rounded-[100px] font-light tracking-[-0.01em] cursor-pointer ${
        variant === "primary"
          ? "text-[#fafafc] bg-[#1f2024]"
          : variant === "secondary"
          ? "text-[#1f2024] bg-[#fafafc] border-[1px] border-[#dfe0e8]"
          : variant === "third"
          ? "text-[#1f2024] border-[1px] border-[#1f2024]"
          : "text-[#1f2024]"
      }`}
    >
      {content}
    </button>
  );
};
