import React from "react";
import Search from "../search";

export default function Toolbar() {
  return (
    <div className="flex justify-between items-center">
      <Search />
    </div>
  );
}
