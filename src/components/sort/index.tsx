import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import {
  Form,
  useNavigation,
  useSearchParams,
  useSubmit,
} from "react-router-dom";
import { Input } from "../ui/input";
import { ORDER } from "@/constants/order";

export default function Sort() {
  let [searchParams, _] = useSearchParams();

  // submit hook is used to submit the form on every change
  const submit = useSubmit();

  const handleSortChange = (value: string) => {
    let allParams = searchParams.entries();
    allParams = Array.from(allParams).reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

    // Update the search query with the selected order
    submit({ ...allParams, order: value });
  };

  return (
    <Form id="order-form" role="order">
      <Select onValueChange={handleSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sıralama" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Sıralama</SelectLabel>
            {ORDER.map((order) => (
              <SelectItem key={order.slug} value={order.slug}>
                {order.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </Form>
  );
}
