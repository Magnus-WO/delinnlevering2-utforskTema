import SkeletonHeading from "@/Components/Skeleton/SkeletonHeading";
import SkeletonCard from "@/Components/Skeleton/SkeletonCard";
import SkeletonImage from "@/Components/Skeleton/SkeletonImage";
import SkeletonText from "@/Components/Skeleton/SkeletonText";

export default function HomePageLoading() {
  return (
    <>
      <SkeletonHeading />
      <section className="LandingPage">
        <div className="landingPage__styleContainer">
          <SkeletonCard numberOfCards={1} />

          <SkeletonText lines={8} />
        </div>
        <div className="landingPage__styleContainer">
          <SkeletonText lines={1} />
          <SkeletonText lines={1} />
          <SkeletonText lines={1} />
        </div>
      </section>
    </>
  );
}
