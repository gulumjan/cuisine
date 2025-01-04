"use client";
import { menuItems } from "@/datas/categories";
import { useParams } from "next/navigation";
import React from "react";
import scss from "./SearchResult.module.scss"

const SearchResult = () => {
  const { query } = useParams();
  console.log(query);

  const item = Object.entries(menuItems)
    .map(([_, item]) => item.filter((el) => el.name === query))
    .filter((el) => el.length > 0);

  console.log(item);
  return (
    <div className={scss.Main}>
      {item[0].map((el) => (
        <p key={el.name}>{el.name}</p>
      ))}
    </div>
  );
};

export default SearchResult;