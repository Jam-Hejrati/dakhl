import React from "react";

export default function page() {
  return (
    <>
      <div className="sm:h-[90%] lg:h-full sm:w-full  bg-slate-300 lg:w-10/12">Content</div>
      <div className="sm:h-[10%] lg:h-full sm:w-full bg-red-300 lg:w-2/12">Sidebar</div>
    </>
  );
}
