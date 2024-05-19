import TypeList from "@/components/type/type-list";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TYPE_LIST } from "@/mock/types";

export default function Homepage() {
  return (
    <>
      <Breadcrumb>
        <h2 className="text-lg">Popüler Başlıklar</h2>
      </Breadcrumb>
      <div className="container mx-auto py-10">
        <TypeList types={TYPE_LIST} />
      </div>
    </>
  );
}
