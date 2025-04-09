import { Breadcrumbs } from "./Breadcrumbs";
import { RatingStars } from "./RatingStars";

export const AboutSection = () => {
  return (
    <section className="flex flex-col gap-[32px] w-[495px] h-[680px] pt-[16px]">
      <div className="w-full h-[24px]">
        <Breadcrumbs
          items={["Home", "Shoes", "Men’s Shoes", "Sneakers", "Tie Sneakers"]}
        />
      </div>
      <div className="flex flex-col gap-[24px] w-full h-[400px]">
        <div className="flex flex-col justify-between w-full h-[120px]">
          <h1 className="text-[24px] leading-[32px] tracking-[-0.01em]">
            Custom nike sneakers, white unisex sneakers. Alien art, sneakers
            nike air force 1
          </h1>
          <div className="flex items-center gap-[8px] w-full h-[16px]">
            <RatingStars rating={4.7} />
            <span className="text-[14px] text-[#1f2024] font-normal tracking-[-0.01em]">
              4.7
            </span>
            <span className="text-[14px] text-[#9ea0ab]">{"(40 reviews)"}</span>
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[8px] h-[32px]">
            <span className="text-[24px] text-[#1f2024] leading-[32px] tracking-[-0.01em]">
              $ 240.00
            </span>
            <span className="text-[16px] text-[#c0c2cc] font-[Metropolis] font-light line-through decoration-1 leading-[24px]">
              $ 365.50
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
