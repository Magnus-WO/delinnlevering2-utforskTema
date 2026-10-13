import SkeletonCard from "@/Components/Skeleton/SkeletonCard";
import SkeletonHeading from "@/Components/Skeleton/SkeletonHeading";
import SkeletonText from "@/Components/Skeleton/SkeletonText";

export default function CategoryPageLoading() {
  return (
    <>
      <SkeletonHeading />
      <SkeletonText lines={3} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(18.75rem, 1fr))",

          gap: "1.2rem",
        }}
      >
        <SkeletonCard numberOfCards={6} />
      </div>
    </>
  );
}
