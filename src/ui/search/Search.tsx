"use client";

import { FC, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./Search.module.scss";
import SearchIconImg from "../../assets/abdurakhman_logos/search-icon.svg";
import { menuItems } from "../../datas/categories";

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get("query");
    if (queryParam) {
      setSearchQuery(queryParam);
    }
  }, [searchParams]);

  const suggestions = Object.entries(menuItems)
    .flatMap(([category, items]) =>
      items
        .filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .map((item) => ({
          name: item.name,
          category,
          price: item.price,
        }))
    )
    .slice(0, 5);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setShowSuggestions(value.length > 0);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    router.push(`/resultDatas/${suggestion}`);
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
        onChange={handleInputChange}
      />
      {showSuggestions && suggestions.length > 0 && (
        <div className={styles.suggestionsContainer}>
          {suggestions.map((suggestion, index) => (
            <div
              key={`${suggestion.category}-${suggestion.name}-${index}`}
              className={styles.suggestionItem}
              onClick={() => handleSuggestionClick(suggestion.name)}
            >
              <span className={styles.suggestionName}>{suggestion.name}</span>
              <span className={styles.suggestionCategory}>
                {suggestion.category}
              </span>
              <span className={styles.suggestionPrice}>{suggestion.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
