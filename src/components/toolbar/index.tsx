import React from "react";
import Search from "../search";
import Sort from "../sort";

export default function Toolbar() {
  return (
    <div className="flex justify-between items-center">
      <Search />
      <Sort />
    </div>
  );
}
