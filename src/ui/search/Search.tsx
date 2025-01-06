"use client";
import { FC, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./Search.module.scss";
import SearchIconImg from "../../assets/abdurakhman_logos/search-icon.svg";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const onKeyDownHandle = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/resultDatas/${encodeURIComponent(searchQuery)}`);
      setSearchQuery(searchQuery);
    } else {
      router.push(`/resultDatas`);
      setSearchQuery(searchQuery);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <Image
        src={SearchIconImg}
        alt="Search icon"
        width={17}
        height={17}
        className={styles.searchIcon}
      />
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onKeyDown={onKeyDownHandle}
        onFocus={() => {
          console.log("focus");

          router.push(`/resultDatas`);
        }}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
