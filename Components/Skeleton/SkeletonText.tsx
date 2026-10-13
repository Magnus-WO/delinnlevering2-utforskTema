export type SkeletonTextProps = {
  lines: number;
  className: string;
  wrapperClassName: string;
};

export default function SkeletonText({
  lines = 4,
  className = "SkeletonText__line",
  wrapperClassName = "SkeletonText__wrapper",
}) {
  let lineElements = [];
  for (let i = 0; i < lines; i++) {
    lineElements.push(<div className={`shimmer ${className}`} key={i}></div>);
  }
  return <div className={wrapperClassName}>{lineElements}</div>;
}
