"use client";
import Link from "next/link";
import React, { useState } from "react";

const Slider = () => {
  const things = [
    { id: 1, names: "Header", url: "/header" },
    { id: 2, names: "Hero", url: "/hero" },
    { id: 3, names: "Section1", url: "/sectionone" },
    { id: 4, names: "Section2", url: "/sectiontwo" },
  ];

  return (
    <div className="w-[200px]  bg-slate-700 ">
      <div className="mt-14 ">
        {things.map((el: any) => (
          <div
            key={el.id}
            className="px-8 py-4 cursor-pointer hover:bg-slate-300"
          >
            <Link
              href={el.url}
              key={el.id}
              className="text-white text-[15px] font-bold "
            >
              <div key={el.id}>{el.names}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
