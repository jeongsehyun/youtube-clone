import styles from "./search_header.module.css";
import React, { useRef, useState } from "react";

const SearchHeader = ({ onSearch, showMostPopular }) => {
  const inputRef = useRef();
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const clearText = () => {
    inputRef.current.value = "";
    setValue("");
  };

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onLogoClick = () => {
    clearText();
    showMostPopular();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <button className={styles.logo} type="button" onClick={onLogoClick}>
        <img className={styles.img} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </button>
      <div className={styles.inputBox}>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
          onChange={onChange}
        />
        {value.length > 0 && (
          <button
            className={styles.clearButton}
            type="reset"
            onClick={clearText}
          >
            <img
              className={styles.clearButtonImg}
              src="./images/clear.png"
              alt="clear text"
            />
          </button>
        )}
        <button className={styles.button} type="submit" onClick={onClick}>
          <img
            className={styles.buttonImg}
            src="./images/search.png"
            alt="search"
          />
        </button>
      </div>
    </header>
  );
};

export default SearchHeader;
