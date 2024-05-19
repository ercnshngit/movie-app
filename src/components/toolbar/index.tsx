import React from "react";
import Search from "../search";
import Sort from "../sort";
import ClearSearchParams from "../clear-search-params";

export default function Toolbar() {
  return (
    <div className="flex justify-between items-center">
      <Search />
      <ClearSearchParams />
      <Sort />
    </div>
  );
}
