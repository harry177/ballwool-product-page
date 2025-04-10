import { AboutSection } from "@/components/AboutSection";
import { Carousel } from "@/components/Carousel";
import { DropdownSection } from "@/components/DropdownSection";

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-between w-[809px] h-[688px]">
        <Carousel slides={["/product-image.jpg", "/product-image.jpg"]} />
        <div className="w-full h-[4px] pl-[1px] pr-[1px]">
          <div className="w-[120px] h-full bg-[#1f2024]"></div>
        </div>
      </section>
      <div className="flex flex-col gap-[32px] w-[511px] pt-[20px] pl-[16px]">
        <AboutSection />
        <DropdownSection />
      </div>
    </>
  );
}
