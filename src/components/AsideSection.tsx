import Image from "next/image";
import { AsideIconBox, AsideIconBoxProps } from "./AsideIconBox";

interface AsideSectionProps {
  icons: AsideIconBoxProps[];
}

export const AsideSection = ({ icons }: AsideSectionProps) => {
  return (
    <aside className="relative flex justify-center items-center w-[72px] h-[780px]">
      <Image
        src="/aside-icons/ballwool-logo.svg"
        alt="Ballwool logo"
        width={24}
        height={24}
        className="absolute top-[36px] left-[24px] cursor-pointer"
      />
      <div className="flex flex-col gap-[12px] w-[48px] h-[288px]">
        {icons.map((item, index) => (
          <AsideIconBox key={index} icon={item.icon} count={item.count}/>
        ))}
      </div>
    </aside>
  );
};
