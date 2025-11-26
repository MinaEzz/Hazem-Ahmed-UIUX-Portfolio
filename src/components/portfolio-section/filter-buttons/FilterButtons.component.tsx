"uce client";
import { CATEGORIES } from "@/data";
import FilterButton from "./filter-button/FilterButton.component";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { setSelected } from "@/lib/store/projects-filter/projectsFilter.slice";

export default function FilterButtons() {
  const { selected } = useAppSelector((state) => state.projectsFilter);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full flex items-center justify-center flex-wrap gap-4 mt-4">
      <FilterButton
        label="All"
        active={selected === "all"}
        onClick={() => dispatch(setSelected("all"))}
      />
      {CATEGORIES.map((cat) => {
        return (
          <FilterButton
            key={cat.id}
            label={cat.label}
            active={selected === cat.id}
            onClick={() => dispatch(setSelected(cat.id))}
          />
        );
      })}
    </div>
  );
}
