import { Type } from "@/types/types";
import TypeCard from "./type-card";

export default function TypeList({ types }: { types: Type[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10">
      {types.map((type) => (
        <div key={type.slug} className="h-[400px] w-full overflow-hidden">
          <TypeCard type={type} />
        </div>
      ))}
    </div>
  );
}
