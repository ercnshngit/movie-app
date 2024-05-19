import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ORDER } from "@/constants/order";
import { useAllSearchParams } from "@/hooks/search-params";
import { Form, useSubmit } from "react-router-dom";

export default function Sort() {
  let { allParams } = useAllSearchParams();

  // submit hook is used to submit the form on every change
  const submit = useSubmit();

  const handleSortChange = (value: string) => {
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
