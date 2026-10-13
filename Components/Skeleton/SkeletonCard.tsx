import "./Skeleton.css";
import SkeletonText from "./SkeletonText";
import SkeletonImage from "./SkeletonImage";
export type SkeletonCardProps = {
  numberOfCards: number;
};
export default function SkeletonCard({ numberOfCards = 3 }: SkeletonCardProps) {
  let cards = [];
  for (let i = 0; i < numberOfCards; i++) {
    cards.push(
      <div className=" SkeletonCard" key={i}>
        <SkeletonImage className="SkeletonCard__image" />
        <div className="shimmer SkeletonCard__heading"></div>
        <SkeletonText lines={4} />
        <div className="shimmer SkeletonCard__link"></div>
      </div>,
    );
  }

  return <>{cards}</>;
}
