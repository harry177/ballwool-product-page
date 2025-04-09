interface BreadcrumbsProps {
  items: string[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav>
      <ol className="flex flex-wrap items-center gap-[8px]">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-[8px]">
            <span
              className={`text-[14px] leading-[16px] tracking-[-0.01em] cursor-pointer ${
                index === items.length - 1
                  ? "text-[#090a0d] ml-[-2px] font-light"
                  : "text-[#848793] font-extralight"
              }`}
            >
              {item}
            </span>
            {index < items.length - 1 && (
              <span className="w-[9px] text-[16px] text-[#848793]">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
