import { StarIcon } from "./StarIcon";

interface RatingStarsProps {
  rating: number;
}

export const RatingStars = ({ rating }: RatingStarsProps) => {
  const fullStars = Math.floor(rating);
  const remainder = +(rating - fullStars).toFixed(1);

  return (
    <div className="flex gap-[6.5px]">
      {[...Array(5)].map((_, i) => {
        const fill = i < fullStars ? 1 : i === fullStars ? remainder : 0;

        return <StarIcon key={i} fill={fill} index={i} />;
      })}
    </div>
  );
};
