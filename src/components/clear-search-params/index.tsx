import React from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { X } from "lucide-react";

export default function ClearSearchParams() {
  let [_, setSearchParams] = useSearchParams();

  const clearSearchParams = () => {
    setSearchParams({});
  };
  return (
    <Button
      type="button"
      className="flex items-center gap-4"
      variant={"ghost"}
      onClick={clearSearchParams}
    >
      Temizle <X size={16} />
    </Button>
  );
}
