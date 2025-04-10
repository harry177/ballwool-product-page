import { userButtonsData } from "@/data/userButtonsData";
import Image from "next/image";
import { Button } from "./Button";
import { dropdownData } from "@/data/dropdownData";
import { ProductDropdown } from "./ProductDropdown";

export const DropdownSection = () => {
  return (
    <section className="flex flex-col gap-[32px] w-[495px]">
      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex flex-col gap-[8px] w-full">
          <article
            className="w-full h-[96px] text-[16px] text-[#545661] tracking-[-0.01em] leading-[24px] overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 50%, transparent 100%)",
            }}
          >
            Discover your inner world as a street artist in our custom-made Nike
            Air Force sneakers with vibrant graffiti patterns. &nbsp;These
            sneakers are not just shoes, they are a bold expression of
            individuality and creativity. Talented artists carefully paint each
            pair by hand, so no two pairs are exactly the same. The graffiti
            style gives the classic Nike Air Force design an urban touch,
            turning these sneakers into a real work of art that reflects the
            essence of street culture.
          </article>
          <div className="flex justify-center items-center w-full h-[20px]">
            <span className="text-[14px] text-[#090a0d] font-light tracking-[-0.01em] border-b-[2px] border-[#090a0d] cursor-pointer">
              Read More
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-[16px]">
          <div className="flex items-center gap-[6px]">
            <div className="flex justify-center items-center w-[16px] h-[16px]">
              <Image
                src="flag.svg"
                alt="Flag icon"
                width={10}
                height={10}
                className="w-auto h-auto"
              />
            </div>
            <span className="text-[14px] text-[#090a0d] font-light tracking-[-0.01em]">
              Report This Item
            </span>
          </div>
          <span className="w-[90px] text-[14px] text-[#9ea0ab] tracking-[-0.01em]">
            June 16, 2024
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-[24px] w-full">
        <div className="flex justify-between h-[32px]">
          <div className="flex items-center gap-[12px]">
            <div className="flex justify-center items-center w-[32px] h-[32px]">
              <Image
                src="nike-logo.svg"
                alt="User icon"
                width={24}
                height={24}
                className="w-auto h-auto"
              />
            </div>
            <span className="text-[18px] text-[#090a0d] font-light tracking-[-0.01em]">
              olganikeart
            </span>
          </div>
          <div className="flex gap-[8px]">
            {userButtonsData.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size={button.size}
                content={button.content}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full">
          {dropdownData.map((item, index) => (
            <ProductDropdown
              key={index}
              title={item.title}
              borderBottom={item.borderBottom}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
