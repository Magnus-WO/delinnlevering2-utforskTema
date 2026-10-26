"use client";
import { Categories } from "@/types/types";
import "./FilterSelector.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export type FilterSelectorProps = {
  as: "h2" | "h3" | "h4" | "h5";
  categories: Categories;
};

export default function FilterSelector({
  as,
  categories,
}: FilterSelectorProps) {
  const searchParams = useSearchParams();

  const pathName = usePathname();
  const { replace } = useRouter();

  function handleFilter(e: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);
    params.delete(`q`);

    const filter = e.target.value;
    if (!filter) {
      params.delete(`q`);
    } else {
      params.set(`q`, filter);
      console.log(params);
    }
    replace(`${pathName}?${params.toString()}`);
  }

  const Element = as;
  return (
    <div className="FilterSelector">
      <Element>Finn:</Element>
      <select
        name="chooseCategory"
        onChange={(e) => {
          handleFilter(e);
        }}
      >
        <option value="">Alle</option>
        {categories.map((item) => (
          <option value={item.strCategory} key={item.idCategory}>
            {item.strCategory}
          </option>
        ))}
      </select>
    </div>
  );
}
