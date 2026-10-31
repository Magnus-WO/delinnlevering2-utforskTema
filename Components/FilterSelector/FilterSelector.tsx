"use client";
import { Categories } from "@/typescript/types/categoryTypes";
import "./FilterSelector.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export type FilterSelectorProps = {
  categories: Categories;
  label: string;
};

export default function FilterSelector({
  categories,
  label,
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
    }
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <div className="FilterSelector">
      <label htmlFor="select-category">{label}</label>
      <select
        id="select-category"
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
