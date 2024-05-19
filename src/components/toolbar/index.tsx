import React from "react";
import Search from "../search";
import Sort from "../sort";
import ClearSearchParams from "../clear-search-params";

export default function Toolbar() {
  return (
    <div className="flex justify-between gap-4 items-center flex-col md:flex-row">
      <div className="order-1">
        <Search />
      </div>
      <div className="order-3 md:order-2">
        <ClearSearchParams />
      </div>
      <div className="order-2 md:order-3">
        <Sort />
      </div>
    </div>
  );
}
