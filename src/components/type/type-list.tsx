import { Type } from "@/types/types";
import TypeCard from "./type-card";
import { List } from "@/components/ui/list";

export default function TypeList({ types }: { types: Type[] }) {
  return (
    <List>
      {types.map((type) => (
        <div key={type.slug} className="h-[400px] w-full overflow-hidden">
          <TypeCard type={type} />
        </div>
      ))}
    </List>
  );
}
