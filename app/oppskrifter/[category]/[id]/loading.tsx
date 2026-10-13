import SkeletonHeading from "@/Components/Skeleton/SkeletonHeading";
import SkeletonText from "@/Components/Skeleton/SkeletonText";
import SkeletonImage from "@/Components/Skeleton/SkeletonImage";

export default function RecipePageLoading() {
  return (
    <>
      <SkeletonHeading />
      <div
        style={{
          display: "flex",
          gap: "7rem",
          alignItems: "center",
          width: "100%",
        }}
      >
        <SkeletonImage className="RecipePage__image" />
        <SkeletonText
          lines={8}
          wrapperClassName="RecipePage__IngredientsWrapper"
        />
      </div>
      <SkeletonText lines={4} wrapperClassName="RecipePage__TextWrapper" />
    </>
  );
}
