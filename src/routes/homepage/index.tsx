import TypeList from "@/components/type/type-list";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TYPE_LIST } from "@/mock/types";
import { getTypes } from "@/services/api/types";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  let types = getTypes();

  return { types };
}

export default function Homepage() {
  let { types } = useLoaderData() as {
    types: typeof TYPE_LIST;
  };
  return (
    <>
      <Breadcrumb>
        <h2 className="text-lg">Popüler Başlıklar</h2>
      </Breadcrumb>
      <div className="container mx-auto py-10">
        <TypeList types={types} />
      </div>
    </>
  );
}
