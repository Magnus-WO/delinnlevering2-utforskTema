import Spinner from "@/Components/Spinner/Spinner";

export default function SearchLoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Spinner />
    </div>
  );
}
