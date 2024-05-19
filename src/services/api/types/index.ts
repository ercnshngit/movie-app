import { TYPE_LIST } from "@/mock/types";
import { TypeResponse } from "@/types/types";

export function getTypes() {
  const data = TYPE_LIST as TypeResponse;

  return data;
}
