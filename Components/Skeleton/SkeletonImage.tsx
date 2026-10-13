export type SkeletonImageProps = {
  className: string;
};

export default function SkeletonImage({ className }: SkeletonImageProps) {
  return <div className={`shimmer SkeletonImage ${className}`}></div>;
}
