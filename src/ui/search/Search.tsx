import { FC, InputHTMLAttributes } from "react";
import Image from "next/image";
import styles from "./Search.module.scss";
import SearchIconImg from "../../assets/abdurakhman_logos/search-icon.svg";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Search: FC<SearchProps> = ({ placeholder = "Search", ...props }) => {
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
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};

export default Search;
