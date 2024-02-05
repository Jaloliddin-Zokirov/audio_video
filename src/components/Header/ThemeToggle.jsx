import React from "react";
import styles from "./Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { editTheme } from "../../Store/Theme/Theme";

const ThemeToggle = () => {
  const { themeList } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    if (themeList) {
      dispatch(editTheme(!themeList));
      document.getElementById("root").classList.remove("light");
    } else {
      dispatch(editTheme(!themeList));
      document.getElementById("root").classList.add("light");
    }
  };

  return (
    <div
      className={`${styles.theme__toggle} ${
        themeList ? styles.light__dark : styles.dark__light
      }`}
      onClick={handleThemeToggle}
    >
      {themeList ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#403D39"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-moon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#CED4DA"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-sun"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      )}
    </div>
  );
};

export default ThemeToggle;
