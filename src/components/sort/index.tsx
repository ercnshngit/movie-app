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
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Form, useSubmit } from "react-router-dom";

export default function Sort({ className }: { className?: string }) {
  let { allParams } = useAllSearchParams();
  let order = allParams.order || "random";

  // submit hook is used to submit the form on every change
  const submit = useSubmit();

  const handleSortChange = (value: string) => {
    const sortExists = ORDER.find((sort) => sort.slug === value);
    if (!sortExists) return;
    // Update the search query with the selected order
    submit({ ...allParams, order: value });
  };

  console.log(allParams);

  const [defaultOrder, setDefaultOrder] = useState(order);
  useEffect(() => {
    console.log(order);

    if (defaultOrder !== order) {
      setDefaultOrder(order);
    }
  }, [order]);

  return (
    <Form id="order-form" role="order">
      <Select onValueChange={handleSortChange} value={defaultOrder}>
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
