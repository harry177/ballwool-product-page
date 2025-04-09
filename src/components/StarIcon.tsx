interface StarIconProps {
  fill: number;
  index: number;
}

export const StarIcon = ({ fill, index }: StarIconProps) => {
  return (
    <div className="relative w-[14px] h-[14px]" key={index}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 left-0"
      >
        <path
          d="M0.556641 5.89118C0.347807 5.69806 0.461246 5.34893 0.74371 5.31544L4.74609 4.84071C4.86122 4.82706 4.96121 4.75477 5.00977 4.6495L6.69792 0.989641C6.81705 0.731351 7.18425 0.731301 7.30339 0.989592L8.99154 4.64942C9.04009 4.75469 9.13944 4.82718 9.25456 4.84083L13.2572 5.31544C13.5396 5.34893 13.6527 5.69816 13.4439 5.89128L10.4852 8.62794C10.4001 8.70665 10.3622 8.8238 10.3848 8.93751L11.17 12.8906C11.2254 13.1696 10.9285 13.3858 10.6803 13.2469L7.16343 11.2777C7.06227 11.2211 6.93938 11.2214 6.83822 11.278L3.32096 13.2464C3.07275 13.3853 2.77529 13.1696 2.83073 12.8906L3.6161 8.93776C3.63869 8.82405 3.60089 8.70662 3.51578 8.62792L0.556641 5.89118Z"
          fill="#E5E7EB"
        />
      </svg>
      <div
        className="absolute top-0 left-0 overflow-hidden"
        style={{ width: `${fill * 100}%` }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.556641 5.89118C0.347807 5.69806 0.461246 5.34893 0.74371 5.31544L4.74609 4.84071C4.86122 4.82706 4.96121 4.75477 5.00977 4.6495L6.69792 0.989641C6.81705 0.731351 7.18425 0.731301 7.30339 0.989592L8.99154 4.64942C9.04009 4.75469 9.13944 4.82718 9.25456 4.84083L13.2572 5.31544C13.5396 5.34893 13.6527 5.69816 13.4439 5.89128L10.4852 8.62794C10.4001 8.70665 10.3622 8.8238 10.3848 8.93751L11.17 12.8906C11.2254 13.1696 10.9285 13.3858 10.6803 13.2469L7.16343 11.2777C7.06227 11.2211 6.93938 11.2214 6.83822 11.278L3.32096 13.2464C3.07275 13.3853 2.77529 13.1696 2.83073 12.8906L3.6161 8.93776C3.63869 8.82405 3.60089 8.70662 3.51578 8.62792L0.556641 5.89118Z"
            fill="#FFC908"
          />
        </svg>
      </div>
    </div>
  );
};
